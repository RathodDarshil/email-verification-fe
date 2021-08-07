import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="application-name" content="Email verifier" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content="Email verifier" />
                    <meta name="description" content="Best Email verifier in the world" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="msapplication-config" content="/static/icons/browserconfig.xml" />
                    <meta name="msapplication-TileColor" content="#2B5797" />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta name="theme-color" content="#000000" />

                    <link rel="apple-touch-icon" href="/static/icons/touch-icon-iphone.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/static/icons/touch-icon-ipad.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/touch-icon-iphone-retina.png" />
                    <link rel="apple-touch-icon" sizes="167x167" href="/static/icons/touch-icon-ipad-retina.png" />

                    <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
                    <link rel="manifest" href="/static/manifest.json" />
                    <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#5bbad5" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:url" content="https://yourdomain.com" />
                    <meta name="twitter:title" content="PWA App" />
                    <meta name="twitter:description" content="Best PWA App in the world" />
                    <meta
                        name="twitter:image"
                        content="https://yourdomain.com/static/icons/android-chrome-192x192.png"
                    />
                    <meta name="twitter:creator" content="@DavidWShadow" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="PWA App" />
                    <meta property="og:description" content="Best PWA App in the world" />
                    <meta property="og:site_name" content="PWA App" />
                    <meta property="og:url" content="https://yourdomain.com" />
                    <meta property="og:image" content="https://yourdomain.com/static/icons/apple-touch-icon.png" />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>

                    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin></script>

                    <script
                        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                        crossOrigin
                    ></script>

                    <script>var Alert = ReactBootstrap.Alert;</script>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
