import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  top: ${ props => props.top ? props.top : 0 }px;
  left: 0;
  z-index: 100;
`

export const Inner = styled.div`
  width: 100%;  
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;

  & .Logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default ({ children, top }) => {
  return (
    <Wrapper top={top}>
      { children }
    </Wrapper>
  )
};