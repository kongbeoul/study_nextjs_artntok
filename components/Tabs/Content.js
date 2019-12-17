import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  & .TabItem {
    flex: none;
    margin-bottom: 40px;
  }
`;

export default memo(({ children }) => {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
});