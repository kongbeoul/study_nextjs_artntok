import { forwardRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Icon } from '../Styled';

const QuickMenuWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ededed;
`
const QuickMenu = styled.li`
  flex: 1;
  text-align: center; 

  & > a {
    display: block;
    padding: 24.5px 0 21px;
    box-sizing: border-box;

    & > span {
      margin: 0 auto;
    }

    & > p {
      margin-top: 9px;
      font-size: 12px;
      color: #333;
    }
  }
`;

const QuickMenuData = [
  {
    url: '/images/common/ico_finder_bg@3x.png',
    txt: '통합검색'
  },
  {
    url: '/images/common/ico_location_bg@3x.png',
    txt: '주변 갤러리'
  },
  {
    url: '/images/common/ico_notice@3x.png',
    txt: '공지사항'
  },
  {
    url: '/images/common/ico_user@3x.png',
    txt: '회원가입'
  }
]

export default forwardRef(({}, ref) => {
  return (
    <QuickMenuWrapper className="quickMenuList" ref={ref}>
      {
        QuickMenuData.map(({ url, txt }, i) => {
          return (
            <QuickMenu className="quickMenu" key={ txt + i }>
              <Link href="/">
                <a>
                  <Icon url={ url } />
                  <p>{ txt }</p>
                </a>
              </Link>
            </QuickMenu>
          )
        })
      }
    </QuickMenuWrapper>
  )
})