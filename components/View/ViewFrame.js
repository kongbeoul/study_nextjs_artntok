import { memo } from 'react';
import styled from 'styled-components'
import Container from '../Layout/Container';
import Visual from './Visual';
import ViewInfo from './ViewInfo';
import InfoTabs from './InfoTabs';

const InfoWrapper = styled.div`
  width: 89vw;
  height: 77vh;
  position: absolute;
  right: 0;
  top: 406px;
  z-index: 50;
  background-color: #fff;
  overflow-y: auto;

  & .LineBox {
    width: 100%;
    height: 45px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #fff;

    &:before {
      content: '';
      width: 80px;
      height: 5px;
      display :block;
      position: absolute;
      top: 20px;
      left: 50%;
      background-color: #ddd;
      border-radius: 3px;
      transform: translateX(-50%);
    }
  }
`;


export default memo(({ info }) => {
  const { displayInfo, history } = info;
  return (
    <Container paddingTop="0">
      <Visual info={info} />
      <InfoWrapper>
        <div className="LineBox" />
        <ViewInfo {...info} />
        <InfoTabs selectedIndex={0} data={[displayInfo, history]} />
      </InfoWrapper>
    </Container>
  )
})