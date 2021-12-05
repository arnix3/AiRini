import { LayoutProps } from 'props';

import { Box } from '@mui/material';
import Footer from './Footer';

function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: '1fr auto',
      }}
    >
      <main>{children}</main>
      <Footer />
    </Box>
  );
}

export default Layout;
