const fs = require('fs')
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import {
    WritingWrapper,
    MarkdownWriting,
    WriteTitle,
    WriteCrumb,
} from '../../styles/writing'

export default function WritePage(props) {
    return (
        <WritingWrapper>
            <WriteCrumb>
                <a href={`/writing?type=${props?.type}`}>{props?.type}</a> /{' '}
                {props?.slug}
            </WriteCrumb>
            <WriteTitle>{props?.title}</WriteTitle>
            <MarkdownWriting
                dangerouslySetInnerHTML={{ __html: props?.contentHtml }}
            />
        </WritingWrapper>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync('public/write/')
    const paths = files.map((file) => ({
        params: { slug: file.split('.')[0] },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params
    const fullPath = `public/write/${slug}.md`
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        props: {
            contentHtml,
            ...matterResult.data,
        },
    }
}
