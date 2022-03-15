import { styled } from '@mui/material';
import { useCallback, useState } from 'react';

import type { LayoutProps, NavWidth } from '@/types/layout';

import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

const Container = styled('div', {
  shouldForwardProp: (prop) => prop !== 'width',
})<NavWidth>(({ theme, width }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto 1fr auto',
  minHeight: '100vh',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: `${width}px 1fr`,
  },
}));

const Main = styled('main')(({ theme }) => ({
  backgroundColor: '#F5F5F7',
  padding: theme.spacing(3),
}));

const NavWrapper = styled('nav', {
  shouldForwardProp: (prop) => prop !== 'width',
})<NavWidth>(({ theme, width }) => ({
  display: 'none',
  gridRow: '1 / 4',
  width,
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const NAV_SX = { display: { md: 'none', xs: 'block' } };

const LayoutTemplate = ({
  businessName,
  children,
  footer,
  headerPages,
  headerTitle,
  navItems,
  navTitle,
  navWidth = 240,
  onClickItem,
}: LayoutProps) => {
  const [open, setOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Container width={navWidth}>
      <Header pages={headerPages} title={headerTitle} onOpen={onOpenDrawer} />
      <Main>{children}</Main>
      <Footer businessName={businessName}>{footer}</Footer>
      <NavWrapper width={navWidth}>
        <Nav
          items={navItems}
          title={navTitle}
          variant="permanent"
          width={navWidth}
          onClickItem={onClickItem}
        />
        <Nav
          items={navItems}
          open={open}
          sx={NAV_SX}
          title={navTitle}
          width={navWidth}
          onClickItem={onClickItem}
          onClose={onCloseDrawer}
        />
      </NavWrapper>
    </Container>
  );
};

export default LayoutTemplate;
