import React, { useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cx from 'classnames';
import Layout from '../../../components/Layout';
import Header, { Inner } from '../../../components/Layout/Header';
import Container from '../../../components/Layout/Container';
import { HeaderProvider } from '../../../context';
import { Menu, Search, Location, InlineBox, Title } from '../../../components/Styled';
import Navigation from '../../../components/Navigation';
import Slider from 'react-slick';
import { Tabs, TabPanel, TabButtonWrapper, Item } from '../../../components/Tabs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../artist.css';

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

const ArtistLink = ({ id, children }) => {
  return (
    <Link href={`/artist/[filter]/[detail]`} as={`/artist/all/${id}`}>
      <a>{ children }</a>
    </Link>
  )
};

const Artist = () => {
  const router = useRouter();
  const { filter } = router.query;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const slideRef = useRef();

  const handleSelect = useCallback(index => {
    setSelectedIndex(index);
    setSlideIndex(0);
    slideRef.current.slickGoTo(0);
  }, []);

  const handleSlideSelect = useCallback(index => {
    setSlideIndex(index);
    slideRef.current.slickGoTo(index);
  }, [])


  return (
    <Layout>
        <HeaderProvider>
          <Header>
            <Inner>
              <Menu />
              <Title>ARTIST</Title>
              <InlineBox marginLeft="10">
                <Link href="/artist/[filter]" as="/artist/all">
                  <a>
                    <Search />
                  </a>
                </Link>
                <Link href="/artist/[filter]" as="/artist/all">
                  <a>
                    <Location />
                  </a>
                </Link>
              </InlineBox>
            </Inner>
            <Navigation />
          </Header>
        </HeaderProvider>
        <Container paddingTop="56">
          <Tabs>
            <TabButtonWrapper anchors={anchors} selectedIndex={selectedIndex} onSelect={handleSelect} />
            <Slider { ...params } ref={ slideRef }>
              {
                genre.map((v, i) => {
                  return ( 
                    <div 
                      key={i} 
                      className={cx('anchor', { active: i === slideIndex })}
                      onClick={ () => handleSlideSelect(i) }
                    >
                      <Link href="/artist/[filter]" as={`/artist/all`}>
                        <a>{ v }</a>
                      </Link>
                    </div> 
                  )
                })
              }
            </Slider>
            <TabPanel>
              {
                tabData[selectedIndex] 
                ? (
                    tabData[selectedIndex].map(({id, ...item}) => {
                      return (
                        <ArtistLink key={id} id={id}>
                          <Item {...item} />
                        </ArtistLink> 
                      )
                    })
                  )
                : <div></div>
              }
            </TabPanel>
          </Tabs>
        </Container>
      </Layout>
  )
}


export default Artist;

