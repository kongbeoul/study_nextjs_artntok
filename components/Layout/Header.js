import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Icon } from '../styled';
import Navigation from '../navigation';

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

  & .Logo {
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

const Logo = styled(Icon.withComponent("a"))`
  width: 107px;
  height: 17px;
  line-height: 0;
  text-indent: -9999px;
  overflow: hidden;
`

const Button = Icon.withComponent("button");

export default () => {
  const [visible, setVisible] = useState(false);
  
  const onVisible = () => {
    setVisible(!visible);
  }

  return (
    <Header>
      <div>
        <Button 
          className="Menu"
          url="/images/common/btn_menu.png"
          onClick={onVisible}
        />
        <h1 className="Logo">
          <Link href="/">
            <Logo url="/images/common/bi.png">
              아트앤톡 로고
            </Logo>
          </Link>
        </h1>
        <div className="util">
          <Button 
            className="Search"
            url="/images/common/ico_finder.png" 
          />
          <Button 
            className="Location"
            url="/images/common/ico_location.png"
          />
        </div>
      </div>
      <Navigation visible={visible} onVisible={onVisible}/>
    </Header>
  )
}