import styled from 'styled-components';
import Heart from '../Styled/Heart';
import Comment from '../Styled/Comment';

const VisualItem = styled.div`
  width: 100%;
  height: 640px;
  padding: 154px 0 28px 40px;
  box-sizing: border-box;
  position: relative;
  background-image: url(${
    props => props.url
  });
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% auto;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, .45);
  }

  & > div {
    position: relative;
    z-index: 2;
  } 

  & > .ctrl {
    position: absolute;
    bottom: 28px;
    left: 40px;
    font-size: 0;

    & > button {
      display: inline-block;
    }

    & > button + button {
      margin-left: 20px;
    }
  }
`

const Slogan = styled.span`
  font-size: 18px;
  color: #eee;
  line-height: 1.55;
  word-break: keep-all;
`
const Typo = styled.h2`
  margin-top: 6px;
  font-size: 45px;
  font-weight :700;
  color: #fff;
  word-break: keep-all;
`

const Period = styled.span`
  display: block;
  margin-top: 25px;
  font-family: 'Roboto';
  font-size: 15px;
  color: #ddd;
`
const Organ = styled.span`
  margin-top: 8px;
  font-size: 15px;
  color: #ddd;
  line-height: 1.6;
`

export default ({ item }) => {
  const { url, slogan, typo, period, organ, comment, liked, likeCount } = item;
  return (
    <VisualItem url={url}>
      <div>
        <Slogan>{ slogan }</Slogan>
        <Typo>{ typo }</Typo>
        <Period>{ period }</Period>
        <Organ>{ organ }</Organ>
      </div>
      <div className="ctrl">
        <Comment count={ comment } />
        <Heart liked={ liked } count={ likeCount } />
      </div>  
    </VisualItem>
  );
}