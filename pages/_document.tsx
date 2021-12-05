import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={'ko'}>
        <Head>
          <meta name={'author'} content={'AiRini'} />
          <meta
            name={'description'}
            content={'안녕하세요. 프론트엔드 개발자 AiRini입니다.'}
          />
          <meta
            name={'keywords'}
            content={'AiRini, Front-end developer, Next.js, React.js'}
          />
          <meta name={'theme-color'} content={'#79baf2'} />
          <meta name={'color-scheme'} content={'light dark'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
