import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="pt-20 sm:pt-24 lg:pt-32">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;