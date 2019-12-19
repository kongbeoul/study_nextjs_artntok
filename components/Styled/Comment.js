import styled from 'styled-components';

const Comment = styled.button`
  display: inline-block;
  font-size:0;

  &:before {
    content: '';
    width: 20px;
    height: 20px;
    display: inline-block;
    background: ${
      props => props.color ? 'url(/images/common/ico_talk_bk@3x.png) 0 0 no-repeat;' : 'url(/images/common/ico_talk.png) 0 0 no-repeat'
    };
    background-size: 100% auto;
    vertical-align: middle;
  }

  & > span {
    display: inline-block;
    margin-left: 5px;
    font-family: 'Roboto';
    font-size: 12px;
    color: ${ props => props.color ? props.color : '#ddd' };
    vertical-align: middle;
  }
`;

export default ({ count, color }) => {
  return (
    <Comment color={color}>
      <span>{ count }</span>
    </Comment>
  )
}