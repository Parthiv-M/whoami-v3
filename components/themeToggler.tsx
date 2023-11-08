import { ThemeToggle } from '../styles/themetoggler'

export default function ThemeToggler(props: any) {
    const handleClick = () => {
        if (typeof props?.toggleTheme() !== 'string') {
            props?.toggleTheme()
        }
    }
    return (
        <ThemeToggle
            onClick={handleClick}
            src={
                props?.theme === 'light'
                    ? '/images/dark.png'
                    : '/images/light.png'
            }
        />
    )
}
