import { useEffect, useState } from 'react'
import {
    Floater,
    FloaterLinks,
    FloaterPM,
    FloatingDash,
    FloatingSoon,
} from '../styles/floatingnavbar'
import ThemeToggler from './ThemeToggler'
import Link from 'next/link'

export default function FloatingNavbar(props: any) {
    const [hideComingSoon, setHideComingSoon] = useState<boolean>(false)
    let position = 0
    const handleScroll = () => {
        position = window.scrollY
        if (position > 190) setHideComingSoon(true)
        else setHideComingSoon(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [position])
    return (
        <Floater>
            <FloaterPM>P M</FloaterPM>
            <FloaterLinks>
                <a href="../#tech">Tech</a>
                {/* <a href="" style={{ pointerEvents: 'none' }}>
                    {!hideComingSoon && (
                        <FloatingSoon>
                            <FloatingDash style={{ height: '80px' }} />
                            Coming soon :)
                        </FloatingSoon>
                    )}
                    Writing
                </a> */}
                <Link href="/blips">Blip</Link>
                <Link href="/writing">Write</Link>
                <Link href="/art">Art</Link>
                <ThemeToggler {...props} />
            </FloaterLinks>
        </Floater>
    )
}
