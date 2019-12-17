import Link from 'next/link';
import styled from 'styled-components';

const NavigationMenu = styled.div`
  width: 100%;
  height: ${ props => props.height }px;
  padding: 47px 40px;
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
`;

const MenuItem = styled.li`
  width: 100%;

  & + li {
    margin-top: 23px;
  }

  & > a {
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: 500;
    color: #111;
  }
`;

const BottomMenu = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ededed;
  box-sizing: border-box;
  display: flex;

  & > a {
    flex: 1;
    height: 100%;
    display: block;
    font-size: 12px;
    color: #666;
    line-height: 50px;
    text-align: center;
  }

  & > a + a {
    border-left: 1px solid #ededed;
    box-sizing: border-box;
    font-weight: 700;
    color: #111;
  }
`


const MenuItemData = ['Exhibition', 'Artist', 'Gallery', 'Puzzle', 'Superb Pink'];

export default ({ height }) => {
  return (
    <NavigationMenu height={height}>
      <ul>
        {
          MenuItemData.map((v, i) => {
            return (
              <MenuItem key={ v + i }>
                <Link href="/">
                  <a>{ v }</a>
                </Link>
              </MenuItem>
            )
          })
        }
      </ul>
      <BottomMenu>
        <Link href="/"><a>이용약관</a></Link>
        <Link href="/"><a>개인정보처리방침</a></Link>
      </BottomMenu>
    </NavigationMenu>
  )
}
