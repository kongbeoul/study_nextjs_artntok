import styled from 'styled-components';


const Container = styled.div`
  padding-top: ${ props => props.paddingTop ? props.paddingTop : 0 }px;
  box-sizing: border-box;
`;

export default Container;