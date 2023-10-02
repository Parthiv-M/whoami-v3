import { useEffect, useState } from 'react'

export const useTheme = () => {
    const [theme, setTheme] = useState('light')

    const setInLocalStorage = (theme: string) => {
        window.localStorage.setItem('theme', theme)
        setTheme(theme)
    }

    const toggleTheme = (): string => {
        theme === 'light'
            ? setInLocalStorage('dark')
            : setInLocalStorage('light')
        return ''
    }

    useEffect(() => {
        const themeInLocalStorage = window.localStorage.getItem('theme')
        if (themeInLocalStorage) setInLocalStorage(themeInLocalStorage)
    }, [])

    return [theme, toggleTheme]
}
