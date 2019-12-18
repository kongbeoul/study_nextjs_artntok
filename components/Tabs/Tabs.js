import React, { memo } from 'react';
import cx from 'classnames';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: relative;

 
`;

export default memo(({ children }) => {
  
  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
});