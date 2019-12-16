import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer, { footerMaxHeight } from './Footer';''

const Layout = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;

  & #container {
    min-height: calc(100vh - ${footerMaxHeight}px);
  }
`;

export default ({ children }) => {
  return (
    <Layout>
      <Header />
      <div id="container">
        {children}
      </div>
      <Footer />
    </Layout>
  )
}