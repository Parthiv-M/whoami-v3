import { useEffect, useState } from 'react'
import {
    Floater,
    FloaterLinks,
    FloaterPM,
    FloatingDash,
    FloatingSoon,
} from '../styles/floatingnavbar'
import ThemeToggler from './ThemeToggler'

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
                <a href="">Tech</a>
                <a href="" style={{ pointerEvents: 'none' }}>
                    {!hideComingSoon && (
                        <FloatingSoon>
                            <FloatingDash style={{ height: '80px' }} />
                            Coming soon :)
                        </FloatingSoon>
                    )}
                    Writing
                </a>
                <a href="" style={{ pointerEvents: 'none' }}>
                    {!hideComingSoon && (
                        <FloatingSoon style={{ translate: '-30%' }}>
                            <FloatingDash style={{ height: '40px' }} />
                            Working on it!
                        </FloatingSoon>
                    )}
                    Art
                </a>
                <ThemeToggler {...props} />
            </FloaterLinks>
        </Floater>
    )
}
