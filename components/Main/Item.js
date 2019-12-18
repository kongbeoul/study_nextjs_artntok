import styled from 'styled-components';

const Thumb = styled.div`
  width: ${ props => props.width }px;
  height: ${ props => props.height }px;

  border-radius: ${ props => props.radius }; 
  overflow: hidden;

  & > img {
    width: 100%;
  }
`;

const Title = styled.h4`
  font-size: ${ props => props.size }px;
  font-weight: ${ (props => props.weight) || 700 };
  color: #111;
  line-height: 1.5;
  text-align: ${ (props => props.align) || 'left' }
`;

const Info = styled.div`
  margin-top: 14px;
`

const Organ = styled.p`
  font-size: 15px;
  color: #666;
  line-height: 1.6;
`

const Period = styled.span`
  display: block;
  font-family: 'Rotobo';
  font-size: 12px;
  color: #999;
`

export default ({ thumbs, title, organ, period }) => {
  const { width, height, radius, url, alt } = thumbs;
  const { size, weight, align, text } = title;

  return (
    <div className="item" style={{ width }}>
      <Thumb className="thumb" width={width} height={height} radius={radius} >
        <img src={url} alt={alt} />
      </Thumb>
      <Info className="info">
        <Title className="tit" size={size} weight={weight} align={align}>{text}</Title>
        { organ && <Organ className="organ">{ organ }</Organ> }
        { period && <Period className="period">{ period } </Period>}
      </Info>
    </div>
  )
}