import styled from 'styled-components';
import Alert from './Alert';

const NoItem = styled.div`
  display: inline-block;
  
  & .Alert {
    margin: 0 auto;
  }

  & > p {
    margin-top: 5px;
    font-size: 15px;
    color: #aaa;
    text-align: center;
  }
`;

export default ({ text }) => {
  return (
    <NoItem>
      <Alert className="Alert" />
      <p>{`현재 진행 중인 ${text}가 없습니다.`}</p>
    </NoItem>
  )
};
