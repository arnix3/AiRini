import { LayoutProps } from 'props';
import Footer from './Footer';

function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
