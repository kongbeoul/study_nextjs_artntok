import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Slider from 'react-slick';
import Button from './Button';
import Content from './Content';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Tab.css';

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  & .btnTabWrap {
    display: flex;

    & > button {
      flex: 1;
    }
  }
`;

const TabConWrapper = styled.div`
  width: 100%;
`

const params = {
  arrows: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  swipeToSlide: true
}

const genreData = ['전체', '회화', '서양화', '동양화', '조각', '공예', '설치미술'];

const tabData = [[{
  id: '001',
  thumbs: '/images/temp/sample-img-01@3x.png',
  name: '김준면',
  engName: 'Junmyeon Kim',
  genre: '설치미술',
  display: true
}, {
  id: '002',
  thumbs: '/images/temp/sample-img-02@3x.png',
  name: '윤지희',
  engName: 'Junmyeon Kim',
  genre: '설치미술',
  display: false
}, {
  id: '003',
  thumbs: '/images/temp/sample-img-03@3x.png',
  name: '이경희',
  engName: 'Junmyeon Kim',
  genre: '설치미술',
  display: false
}, {
  id: '004',
  thumbs: '/images/temp/sample-img-04@3x.png',
  name: '양대만',
  engName: 'Junmyeon Kim',
  genre: '설치미술',
  display: false
}, {
  id: '005',
  thumbs: '/images/temp/sample-img-05@3x.png',
  name: '이경희',
  engName: 'Junmyeon Kim',
  genre: '설치미술',
  display: false
}, {
  id: '006',
  thumbs: '/images/temp/sample-img-06@3x.png',
  name: '이경희',
  engName: 'Junmyeon Kim',
  genre: '설치미술',
  display: false
}]]

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideActiveIndex, setSlideActiveIndex] = useState(0);
  const [top, setTop] = useState(0);

  const handleTabClicked = useCallback(index => {
    setActiveIndex(index);
    sliderRef.current.slickGoTo(0);
    setSlideActiveIndex(0);
  }, [activeIndex])

  const handleSlideClicked = useCallback(index => {
    sliderRef.current.slickGoTo(index);
    setSlideActiveIndex(index);
  }, [slideActiveIndex])

  const sliderRef = useRef();

  return (
    <Wrapper>
      <div className="btnTabWrap">
        {
          ["작가명", "장르"].map((v, i) => {
            return (
              <Button 
                key={i} 
                className={classNames({ active: i === activeIndex })}
                onClick={() => handleTabClicked(i) }
              >
                { v }
              </Button>
            )
          })
        }
      </div>
      <div>
        <Slider {...params} ref={sliderRef} className="TabSlider">
          {
            genreData.map((v, i) => {
              return (
                <div 
                  key={v + i} 
                  className={classNames('anchor', { active: i === slideActiveIndex })}
                  onClick={() => handleSlideClicked(i) }
                >
                  { v }
                </div>
              )
            })
          }
        </Slider>
      </div>
      <TabConWrapper>
        { tabData[activeIndex] 
          ? <Content items={tabData[activeIndex]}/> 
          : <div></div>
        }
      </TabConWrapper>
    </Wrapper>
  )
}