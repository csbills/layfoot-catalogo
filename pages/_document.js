import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                    <meta name="google-site-verification" content="V4Zl7s4AcgUpbVEO8cicL2K8DTeGBntqEWZ8EyRP3uk" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <div id="root"></div>
                </body>
            </Html>
        )
    }
}

export default MyDocument