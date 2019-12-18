import React, { useState, useRef, useEffect, useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Icon, Line } from '../Styled';
import UserInfo from './UserInfo';
import QuickMenu from './QuickMenu';
import NavigationMenu from './NavigationMenu';
import { HeaderContext, TOGGLE_NAVIGATION } from '../../context';

const Navigation = styled.nav`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  transform: translateX(-100%);
  transition: 350ms transform ease;

  &.active {
    transform: translateX(0);
  }
`

const Home = styled(Icon.withComponent("a"))`
  position: absolute;
  top: 16px;
  left: 20px;
`;

const Close = styled(Icon.withComponent("button"))`
  position: absolute;
  top: 16px;
  right: 20px;
`;

export default () => {
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ height, setHeight ] = useState(0);

  const userInfoRef = useRef();
  const quickMenuRef = useRef();
  

  useEffect(() => {
    const height = [userInfoRef.current, quickMenuRef.current].reduce((acc, cur) => {
      return acc + cur.offsetHeight;
    }, 0);
    setHeight(window.innerHeight - (height + 10));
  }, [])

  const { state, dispatch } = useContext(HeaderContext);
  const { visible } = state;

  return (
    <Navigation id="nav" className={ visible ? 'active' : '' }>
      <Link href="/">
        <Home className="Home" url="/images/common/ico_home@3x.png" />
      </Link>
      <UserInfo loggedIn={loggedIn} ref={userInfoRef} />
      <QuickMenu ref={quickMenuRef} />
      <Line />
      <NavigationMenu height={height} />
      <Close type="button" url="/images/common/btn_close@3x.png" onClick={() => dispatch({ type: TOGGLE_NAVIGATION })}/>
    </Navigation>
  )
}