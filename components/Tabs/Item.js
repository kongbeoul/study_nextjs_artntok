import styled from 'styled-components';

const Thumb = styled.div`
  width: 152px;
  height: 152px;

  & > img {
    width: 100%;
  }
`;

const Description = styled.div`
  width: 100%;
  margin-top: 10px;
  position: relative;
`

const Name = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #111;
  line-height: 1.53;
`;

const EngName = styled.span`
  display: block;
  font-size: 12px;
  color: #333;
  line-height: 1.5;
`

const Genre = styled.span`
  display: block;
  font-size: 12px;
  color: #999;
  line-height: 1.5;
`;

const Display = styled.span`
  width: 39px;
  height: 19px;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #f95454;
  border-radius: 10px;
  font-size: 9px;
  font-weight: 500;
  color: #f95454;
  text-align: center;
  line-height: 19px;
`

export default ({ thumbs, name, engName, genre, display }) => {
  return (
    <div className="TabItem">
      <Thumb><img src={ thumbs } /></Thumb>
      <Description>
        <Name>{ name }</Name>
        <EngName>{ engName }</EngName>
        <Genre>장르 | { genre }</Genre>
        { display && <Display>전시중</Display>}
      </Description>
    </div>
  )
}