import styled from 'styled-components';

export const TabButtons = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;
  ${ props => props.position && props.position }

`;

const Tab = styled.button`
  padding-bottom: 18px;
  box-sizing: border-box;
  position: relative;
  font-size: 16px;
  font-weight: 500;
  color: #999;
  text-align: center;

  &:after {
    content: '';
    width: 100%;
    height: 2px;
    display: block;
    position: absolute;
    left: 0;
    bottom: -1px;
    background-color: #f95454;
    transform-origin: 50% 50%;
    transform: scaleX(0);
    transition: 350ms transform ease;
  }

  &.active {
    font-weight: 700;
    color: #f95454;

    &:after {
      transform: scaleX(1);
    }
  }

  & + * {
    margin-left: 30px;
  }
`;

export default Tab;
