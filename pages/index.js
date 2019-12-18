import React from 'react';
import Link from 'next/link';
import Header, { Inner } from '../components/Layout/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Layout/Footer';
import Layout from '../components/Layout';
import MainFrame from '../components/MainFrame';
import { Menu, Search, Location, Logo, InlineBox } from '../components/Styled';
import { HeaderProvider } from '../context';

const Index = () => {

  return (
    <React.Fragment>
      <Layout>
        <HeaderProvider>
          <Header>
            <Inner>
              <Menu main />
              <h1 className="Logo">
                <Link href="/">
                  <a>
                    <Logo />
                  </a>
                </Link>
              </h1>
              <InlineBox marginLeft="10">
                <Link href="/">
                  <a>
                    <Search main />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Location main />
                  </a>
                </Link>
              </InlineBox>
            </Inner>
            <Navigation />
          </Header>
        </HeaderProvider>
        <MainFrame />
        <Footer />
      </Layout>
    </React.Fragment>
  )
}

export default Index;