import type { AppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalstyles'
import { useTheme } from '../hooks/useTheme'
import FloatingNavbar from '../components/FloatingNavbar'
import Footer from '../components/Footer'
import FloatingVerbose from '../components/FloatingVerbose'
import { useVerbose } from '../hooks/useVerbose'

const lightTheme: DefaultTheme = {
    colors: {
        primary: '#FFEBF7',
        secondary: '#1A1A1A',
    },
    bgColor: '#FFEBF7',
    textColors: {
        primary: '#14000C',
        secondary: '#828C7D',
    },
}

const darkTheme: DefaultTheme = {
    colors: {
        primary: '#1A1A1A',
        secondary: '#FFEBF7',
    },
    bgColor: '#1A1A1A',
    textColors: {
        primary: '#FFEBF7',
        secondary: '#CBCFC9',
    },
}

export default function App({ Component, pageProps }: AppProps) {
    const [theme, toggleTheme] = useTheme()
    const [isChecked, handleToggle] = useVerbose()
    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                <FloatingNavbar theme={theme} toggleTheme={toggleTheme} />
                <Component {...pageProps} verbose={isChecked} />
                <FloatingVerbose checked={isChecked} onChange={handleToggle} />
                <Footer />
            </ThemeProvider>
        </>
    )
}
