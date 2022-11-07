import { FC } from 'react';

import { Footer } from './components/footer';

import { Header } from './components/header';

import { Container } from './layout.style';

import { ILayoutProps } from './layout.types';

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};
