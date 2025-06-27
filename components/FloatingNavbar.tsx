import { Floater, FloaterLinks, FloaterPM } from '../styles/floatingnavbar'
import ThemeToggler from './ThemeToggler'
import Link from 'next/link'

export default function FloatingNavbar(props: any) {
    return (
        <Floater>
            <FloaterPM>P M</FloaterPM>
            <FloaterLinks>
                <a href="../#tech">Tech</a>
                <Link href="/blips">Blip</Link>
                <Link href="/writing">Write</Link>
                <Link href="/art">Art</Link>
                <ThemeToggler {...props} />
            </FloaterLinks>
        </Floater>
    )
}
