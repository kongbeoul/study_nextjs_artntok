import { memo } from 'react';
import styled from 'styled-components';

const Visual = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  & > img {
    width: 100%;
  }

  &:before {
    content: '';
    width: 100%;
    height: 200px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: url(/images/common/gradient_dim@3x.png) 0 0 no-repeat;
    background-size: 100% auto;
  }
`;

export default memo(({ info }) => {
  const { src, name } = info
  return (
    <Visual>
      <img src={src} alt={name} />     
    </Visual>
  )
})