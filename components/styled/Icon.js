import styled from 'styled-components';

const Icon = styled.span`
  width: 24px;
  height: 24px;
  display: block;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-image: url(${ props => props.url });
`;


export default Icon;