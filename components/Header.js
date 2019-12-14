import styled from 'styled-components';

const MainFrame = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
`

const Header = () => {
  return (
    <MainFrame>
      Header 입니다.
    </MainFrame>
  )
}

export default Header;