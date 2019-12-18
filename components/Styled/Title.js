import styled from 'styled-components';

const Title = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  color: #111;
`;

export const SmallTitle = styled.p`
  font-size: 18px;
  color: ${ props => props.color };
  line-height: 1.5;
`

export default Title;