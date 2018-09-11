import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
    //load css in server
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage()
        const styles = flush()
        return { html, head, errorHtml, chunks, styles }
      }

    render() {
        return (
            <html>
                <Head>
                    <title>Project X</title>
                    <link
                        rel="shortcut icon"
                        href="/Icon/favicon.ico"
                        type="image/x-icon"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta charSet="utf-8" />
                    <link
                        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
                        rel="stylesheet"
                    />
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
