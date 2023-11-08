import { Floater, FloaterLinks, FloaterPM } from '../styles/floatingnavbar'
import ThemeToggler from './ThemeToggler'

export default function FloatingNavbar(props: any) {
    return (
        <Floater>
            <FloaterPM>P M</FloaterPM>
            <FloaterLinks>
                <a href="">
                    <span>Tech</span>
                </a>
                <a href="">
                    <span>Writing</span>
                </a>
                <a href="">
                    <span>Art</span>
                </a>
                <ThemeToggler {...props} />
            </FloaterLinks>
        </Floater>
    )
}
