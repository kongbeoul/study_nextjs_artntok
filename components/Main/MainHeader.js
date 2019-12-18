import Link from 'next/link';
import { HeaderProvider } from '../../context';
import Header, { Inner } from '../Layout/Header';
import { Menu, Search, Location, Logo, InlineBox } from '../Styled'
import Navigation from '../Navigation';

export default () => {
  return (
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
  )
}