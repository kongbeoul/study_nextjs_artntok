import { memo } from 'react';
import Link from 'next/link';
import { HeaderProvider } from '../../context';
import Header, { Inner } from '../Layout/Header';
import { Menu, Search, Location, InlineBox, Title } from '../Styled';
import Navigation from '../Navigation';

export default memo(({ title }) => {
  return (
    <HeaderProvider>
      <Header>
        <Inner>
          <Menu />
          <Title>{ title }</Title>
          <InlineBox marginLeft="10">
            <Link href="/">
              <a>
                <Search />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Location />
              </a>
            </Link>
          </InlineBox>
        </Inner>
        <Navigation />
      </Header>
    </HeaderProvider>
  )
})