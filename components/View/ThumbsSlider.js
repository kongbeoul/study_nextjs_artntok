import { useCallback, useContext, memo } from 'react';
import styled from 'styled-components';
import { ViewContext, CLOSE_THUMBNAIL_SLIDER } from '../../context/view';
import { RepresentContext } from '../../context/represent'; 
import { Icon, Dimmed } from '../Styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ThumbsSlider.css';

const Wrapper = styled.div`
  width: 275px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000
`

const Close = styled(Icon.withComponent("button"))`
  position: absolute;
  top: -34px;
  right: 0;
  background-image: url(/images/common/btn_close2@3x.png);
`;

const Item = styled.div`
  width: 100%;
  height: 100%;

  & > img {
    width: 100%;
  }
`



export default memo(() => {
  const { state, dispatch } = useContext(ViewContext);
  const { index } = state;
  const { represent } = useContext(RepresentContext);

  const params = {
    dots: true,
    arrows: false, 
    infinite: false,
    initialSlide: index,
    className: 'ThumbsSlider'
  }

  const handleClicked = useCallback(() => {
    dispatch({
      type: CLOSE_THUMBNAIL_SLIDER
    })
  }, [])

  return (
    <div>
      <Wrapper>
        <Close onClick={handleClicked} />
        <Slider {...params}>
          {
            represent.map((v, i) => {
              return (
                <Item key={`대표작품 ${i}`}>
                  <img src={v} alt={`대표작품 ${i}`}/>
                </Item>
              )
            })
          }
        </Slider>
      </Wrapper>
      <Dimmed />
    </div>
  )
})

