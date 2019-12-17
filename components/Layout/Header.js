import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { last } from 'lodash';
import { Logo, Menu, Search, Location, Title } from '../Styled';
import Navigation from '../Navigation';

import { NAMESPACE, PAGES } from '../config';

const Header = styled.header`
  width: 100%;
  height: 56px;
  padding: 16px 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  & .tit {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & .util {
    display: flex;
    justify-content: space-between;

    & > .Location {
      margin-left: 10px;
    }
  }
`

export default ({ pathname }) => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(PAGES.includes(pathname));

  const onVisible = () => {
    setVisible(!visible);
  };

  return (
    <Header>
      <div>
        <Menu onVisible={onVisible} active={active} />
        <h1 className="tit">
        {
          active 
          ? (
              <Title>
                {
                  (last(PAGES[PAGES.indexOf(pathname)].split("/"))).toUpperCase()
                }
              </Title>
            )
          : (
              <Link href="/">
                <Logo className="Logo">{ NAMESPACE }</Logo>
              </Link>
            )
        }
        </h1>
        <div className="util">
          <Search active={active} />
          <Location active={active} />
        </div>
      </div>
      <Navigation visible={visible} onVisible={onVisible}/>
    </Header>
  )
}