import { memo } from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #222;
  line-height: 1.5;
  text-align: left;
`;

const List = styled.dl`
  margin-top: 16px;
  text-align:left;

  & dt {
    font-size: 17px;
    font-weight: 500;
    color: #333;
    line-height: 1.64;
  }

  & dd {
    font-size: 15px;
    color: #666;
    line-height: 1.86;
    word-break: keep-all;
  }

  & dd + .smTitle {
    margin-top: 30px;
  }

  & dd + dt {
    margin-top: 11px;
  }
`

export default memo(({ edu, description }) => {
  const { person, group } = description;
  return (
    <div>
      <Title>작가약력</Title>
      <List>
        <dt>학력</dt>
        {
          edu.map((v, i) => {
            return <dd key={i}>{v}</dd>
          })
        }
        <dt>작가소개</dt>
        <dd>개인전</dd>
        {
          person.map((v, i) => {
            return <dd key={i}>{v}</dd>
          })
        }
        <dd className="smTitle">단체전</dd>
        {
          group.map((v, i) => {
            return <dd key={i}>{v}</dd>
          })
        }
      </List>

    </div>
  )
});