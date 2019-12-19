import Link from 'next/link';
import { HeaderProvider } from '../../context';
import Header, { Inner } from '../Layout/Header';
import { InlineBox, Prev, SmallTitle, Search, Location } from '../Styled';

export default ({ title, href, as: _as }) => {
  return (
    <HeaderProvider>
      <Header>
        <Inner>
          <InlineBox marginLeft="25">
            <Link href={`${href}`} as={`${_as}`}>
              <a>
                <Prev />
              </a>
            </Link>
            <SmallTitle color="#fff">{ title }</SmallTitle>
          </InlineBox>
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
      </Header>
    </HeaderProvider>
  )
}