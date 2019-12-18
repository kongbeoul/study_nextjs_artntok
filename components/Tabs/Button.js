import styled from 'styled-components';

const Button = styled.div`
  width: 100%;
  display: block;
  padding: 14px 0 17.5px;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  font-weight: 500;
  color: #111;
  text-align: center;
  line-height: 2;

  &:after {
    content: '';
    width: 100%;
    height: 2px;
    display: block;
    position: absolute;
    left: 0;
    bottom: -1px;
    background-color: #111;
    transform-origin: 50% 0;
    transform: scaleX(0);
    transition: 350ms transform ease;
  }

  &.active {
    font-weight: 700; 

    &:after {
      transform: scaleX(1);
    }
  }
`;

export default Button;