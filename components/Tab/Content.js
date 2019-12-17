import React, { memo } from 'react';
import styled from 'styled-components';
import Item from './Item';

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

export default memo(({ items }) => {
  return (
    <Wrapper>
      {
        items.map(item => <Item key={item.id} {...item} />)
      }
    </Wrapper>
  )
});