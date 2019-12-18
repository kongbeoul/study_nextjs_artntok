import { memo } from 'react';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  & .Item {
    flex: none;
    margin-bottom: 40px;
  }
`;

export default memo(({ data }) => {
  return (
    <Wrapper>
    {
      data.map(({ id, ...item}) => {
        return (
          <Item key={id} {...item} />
        )
      })
    }
    </Wrapper>
  )
})