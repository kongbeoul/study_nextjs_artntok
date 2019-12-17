import styled from 'styled-components';

export const Icon = styled.span`
  width: 24px;
  height: 24px;
  display: block;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-image: url(${ props => props.url });
`;

export const Line = styled.hr`
  width: 100%;
  height: 10px;
  display: block;
  background-color: #ededed;
`;

