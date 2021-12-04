import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={'ko'}>
        <Head>
          <meta title={'author'} content={'AiRini'} />
          <meta
            title={'description'}
            content={'안녕하세요. 프론트엔드 개발자 AiRini입니다.'}
          />
          <meta
            title={'keywords'}
            content={'AiRini, Front-end developer, Next.js, React.js'}
          />
          <meta
            name={'viewport'}
            content={'width=device-width, initial-scale=1'}
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
