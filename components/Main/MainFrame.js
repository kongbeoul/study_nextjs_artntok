import { memo } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import Slider from 'react-slick';
import Section from './Section';
import Item from './Item';
import { Line } from '../Styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Contents = styled.div`
  & .section:first-child {
    padding-top: 79px;
  }
`;

const params = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slideToShow: 1,
  slidesToScroll: 1,
  variableWidth: true
}

export default memo(({ premium, standard, spot, superbPink }) => {
  return (
    <Contents className="contents">
      <Section title="이렇게나 다양한 전시가 있어요! :D">
        <Slider {...params} className={cx('slick-slider', 'premium')}>
          {
            premium.map((item, i) => {
              return <Item key={i} {...item} />
            })
          }
        </Slider>
        <Slider {...params} className={cx('slick-slider', 'standard')}>
          {
            standard.map((item, i) => {
              return <Item key={i} {...item} />
            })
          }
        </Slider>
        <Slider {...params} className={cx('slick-slider', 'spot')}>
          {
            spot.map((item, i) => {
              return <Item key={i} {...item} />
            })
          }
        </Slider>
      </Section>
      <Line />
      <Section label="Super Pink" title="문화예술계의 새싹을 소개해드립니다 : )">
        <Slider {...params} className={cx('slick-slider', 'superbPink')}>
          {
            superbPink.map((item, i) => {
              return <Item key={i} {...item} />
            })
          }
        </Slider>
      </Section>
    </Contents>
  )
})