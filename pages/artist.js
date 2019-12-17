import React, { Component, createRef } from 'react';
import cx from 'classnames';
import Layout from '../components/Layout';
import Slider from 'react-slick';
import { Tabs, Content, Item } from '../components/Tabs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/Tabs/Tab.css';

const anchors = ['작가명', '장르'];

const params = {
  arrows: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  swipeToSlide: true,
  className: 'TabSlider'
};

const genre = ['전체', '회화', '서양화', '동양화', '조각', '공예', '설치미술'];

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


export default class Artist extends Component {
  static getInitialProps({ pathname }) {
    return { pathname }
  }

  state = {
    selectedIndex: 0,
    slideIndex: 0,
  }

  handleSelect = index => {
    this.setState({
      selectedIndex: index,
      slideIndex: 0
    })
    this.slideRef.current.slickGoTo(0);
  }

  handleSlideSelect = index => {
    this.setState({
      slideIndex: index,
    })
    this.slideRef.current.slickGoTo(index);
  }

  slideRef = createRef();

  render() {
    const { pathname } = this.props;
    const { selectedIndex, slideIndex } = this.state;
    const { handleSelect, handleSlideSelect, slideRef } = this;

    return (
      <Layout pathname={pathname} sub={true}>
        <Tabs anchors={anchors} selectedIndex={selectedIndex} onSelect={handleSelect}>
          <Slider { ...params } ref={ slideRef }>
            {
              genre.map((v, i) => {
                return ( 
                  <div 
                    key={i} 
                    className={cx('anchor', { active: i === slideIndex })}
                    onClick={() => handleSlideSelect(i) }
                  >
                    { v }
                  </div> 
                )
              })
            }
          </Slider>
          <Content>
            {
              tabData[selectedIndex] 
              ? (
                  tabData[selectedIndex].map(item => {
                    return <Item key={item.id} {...item} />
                  })
                )
              : <div></div>
            }
          </Content>
        </Tabs>
      </Layout>
    )
  }
}

