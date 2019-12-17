import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer, { footerMaxHeight } from './Footer';

const Layout = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;

  & #container {
    min-height: calc(100vh - ${footerMaxHeight}px);
    ${ 
      props => props.sub && `padding:56px 0 0 0;box-sizing:border-box;`
    }
  }
`;

export default ({ children, pathname, sub }) => {
  return (
    <Layout sub={sub}>
      <Header pathname={pathname}/>
      <div id="container"> 
        {children}
      </div>
      <Footer />
    </Layout>
  )
}