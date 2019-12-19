import { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: left;
`

const Title = styled.strong`
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: #222;
  line-height: 1.5;

  & + * {
    margin-top: 20px;
  }
`;

export default memo(({ title, children }) => {
  return (
    <Wrapper>
      <Title>{ title }</Title>
      { children }
    </Wrapper>
  )
})