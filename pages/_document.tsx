import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            }
        } finally {
            sheet.seal()
        }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Yeseva+One&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Questrial&display=swap"
                        rel="stylesheet"
                    />
                    <script
                        async
                        src="https://hammerjs.github.io/dist/hammer.js"
                    ></script>
                    <meta
                        name="description"
                        content={'A place to get to know me more.'}
                    />
                    <meta
                        name="keywords"
                        content={
                            'parthiv, menon, parthiv menon, portfolio, website'
                        }
                    />
                    <link
                        rel=" icon"
                        type="image/svg+xml"
                        href="/favicon.svg"
                    />
                    <link rel="canonical" href="https://parthivmenon.com" />
                    <meta name="reply-to" content="parthivmenon01@gmail.com" />
                    <meta property="og:title" content="Parthiv Menon" />
                    <meta
                        property="og:description"
                        content={'A place to get to know me more.'}
                    />
                    <meta property="og:site_name" content="Parthiv Menon" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
