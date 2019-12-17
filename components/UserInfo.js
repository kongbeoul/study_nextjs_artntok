import { forwardRef } from 'react';
import styled from 'styled-components';

const UserInfo = styled.div`
  width: 100%;
  padding: 80px 40px 35px;
  box-sizing: border-box;

  & > p {
    font-size: 18px;
    color: #000;
    line-height: 1.55;
    & > strong {
      font-weight: 700;
      text-decoration: underline;
    }
  }
`

export default forwardRef(({ loggedIn }, ref) => {
  return (
    <UserInfo ref={ref}>
      {
        loggedIn ? 
        '' 
        : (
          <p>안녕하세요 고객님,<br/><strong>로그인</strong> 해주세요 :)</p>
        )
      }
    </UserInfo>
  )
});