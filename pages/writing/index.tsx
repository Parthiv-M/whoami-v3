const fs = require('fs')
import matter from 'gray-matter'
import {
    WritingWrapper,
    WritingSection,
    WritingSideBar,
    WritingList,
    WritingSideBarItem,
    WritingListItem,
    WritingListItemHeader,
} from '../../styles/writing'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function WritingPage({ data }) {
    const searchParams = useSearchParams()
    const type = searchParams.get('type')
    const [writeType, setWriteType] = useState('')

    useEffect(() => {
        if (!type) {
            setWriteType('all')
        } else {
            setWriteType(type)
        }
    }, [type])

    return (
        <WritingWrapper>
            <WritingSection>
                <WritingSideBar>
                    <WritingSideBarItem
                        href="/writing"
                        active={'all' === writeType}
                    >
                        <p>A</p>
                        <p>All</p>
                    </WritingSideBarItem>
                    <WritingSideBarItem
                        href="/writing?type=story"
                        active={'story' === writeType}
                    >
                        <p>S</p>
                        <p>Stories</p>
                    </WritingSideBarItem>
                    <WritingSideBarItem
                        href="/writing?type=poem"
                        active={'poem' === writeType}
                    >
                        <p>P</p>
                        <p>Poems</p>
                    </WritingSideBarItem>
                    <WritingSideBarItem
                        href="/writing?type=prose"
                        active={'prose' === writeType}
                    >
                        <p>Pr</p>
                        <p>Prose</p>
                    </WritingSideBarItem>
                    <WritingSideBarItem
                        href="/writing?type=other"
                        active={'other' === writeType}
                    >
                        <p>O</p>
                        <p>Others</p>
                    </WritingSideBarItem>
                </WritingSideBar>
                <WritingList>
                    {data &&
                        data
                            .filter((item: any) => {
                                if (writeType !== 'all')
                                    return item.type === writeType
                                else return item
                            })
                            .map((item: any) => {
                                return (
                                    <Link
                                        href={'/writing/' + item.slug}
                                        key={item.slug}
                                    >
                                        <WritingListItem>
                                            <WritingListItemHeader>
                                                <h5>{item.title}</h5>
                                                <p>
                                                    {Math.ceil(item.ttr / 60)}{' '}
                                                    min
                                                    {Math.ceil(item.ttr / 60) >
                                                    1
                                                        ? 's'
                                                        : ''}
                                                </p>
                                            </WritingListItemHeader>
                                            <p>{item.summary}</p>
                                        </WritingListItem>
                                    </Link>
                                )
                            })}
                </WritingList>
            </WritingSection>
        </WritingWrapper>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync('public/write/')
    let data = []
    for (let file of files) {
        const fullPath = `public/write/${file}`
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        data.push({ ...matterResult.data })
    }

    return {
        props: {
            data,
        },
    }
}
