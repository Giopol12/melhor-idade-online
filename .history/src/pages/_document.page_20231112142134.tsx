import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner:wght@700&family=Roboto:wght@900&display=swap" rel="stylesheet">
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
