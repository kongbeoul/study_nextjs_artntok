import Link from 'next/link';
import styled from 'styled-components';

export const footerMaxHeight = 97;

const Footer = styled.footer`
  max-height: ${footerMaxHeight}px;
  padding: 26.5px 0 37px;
  box-sizing: border-box;
  border-top: 1px solid #ededed;
  text-align: center;

  & .bottomMenuList {
    font-size: 0;
  }

  & .bottomMenu {
    display: inline-block;
  }

  & .bottomMenu > a {
    display: inline-block;
    font-size: 12px;
    color: #666;
    line-height: 1.66;
    vertical-align: middle;
  }

  & .bottomMenu + .bottomMenu {
    &:before {
      content: '';
      width: 2px;
      height: 2px;
      display: inline-block;
      margin: 0 10px;
      vertical-align: middle;
    }
  }

  & .copy {
    margin-top: 8px;
    font-family: 'Roboto';
    font-size: 10px;
    color: #aaa;
  }
`

const menuList = ["공지사항", "이용약관", "개인정보처리방침"]

export default () => {
  return (
    <Footer id="footer"> 
      <ul className="bottomMenuList">
        {
          menuList.map((v, i) => {
            return (
              <li key={v + i} className="bottomMenu">
                <Link href="/">
                  <a>{ v }</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <p className="copy">ⓒ MEDIA4TNCOMPANY. All rights reserved.</p>
    </Footer>
  )
}