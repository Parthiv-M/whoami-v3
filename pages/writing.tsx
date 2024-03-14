import { WIPBanner, WritingWrapper } from '../styles/writing'

export default function Writing() {
    return (
        <WritingWrapper>
            <WIPBanner>Work In Progress</WIPBanner>
            <p>
                While I build this page, check out what I wrote at{' '}
                <a
                    href="https://themitpost.com/author/parthiv/"
                    target="_blank"
                >
                    The MIT Post
                </a>{' '}
                and at{' '}
                <a
                    href="https://cybermanipal.wearemist.in/author/@ParthivMenon"
                    target="_blank"
                >
                    Cybermanipal
                </a>
                .
            </p>
        </WritingWrapper>
    )
}
