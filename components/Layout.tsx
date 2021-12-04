import { LayoutProps } from 'props';

import Head from 'next/head';

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>AiRini</title>
      </Head>
      <main>{children}</main>
    </>
  );
}

export default Layout;
