import styled from 'styled-components';
import Link from 'next/link';

const MainFrame = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  border: 1px solid black;
  font-family: 'Roboto';
  font-weight: 500;

  & > h1 {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Logo = styled.a`
  width: 59px;
  height: 29px;
  display: block;
  background: url(${props => props.url}) 0 0 no-repeat;
  background-size: 100% auto;
  overflow: hidden;
  text-indent: -9999px;
  line-height: 0;
`

const Header = () => {
  return (
    <MainFrame>
    <h1 className="Logo">
      <Link href="/">
        <Logo url="/images/logo.png">Media4th &amp; Company Logo </Logo>
      </Link>
    </h1>
    </MainFrame>
  )
}

export default Header;