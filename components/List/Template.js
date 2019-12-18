import React, { useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import cx from 'classnames';
import Layout from '../Layout';
import Header, { Inner } from '../Layout/Header';
import Container from '../Layout/Container';
import { HeaderProvider } from '../../context';
import { Menu, Search, Location, InlineBox, Title } from '../Styled';
import Navigation from '../Navigation';
import Slider from 'react-slick';
import Item, { Wrapper as ItemWrapper } from './Item';
import { Button } from '../Tabs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Template.css';

const anchors = [{
  href: '/artist/[filter]',
  as: '/artist/all',
  text: '작가명',
}, {
  href: '/genre/[filter]',
  as: '/genre/all',
  text: '장르',
}];

const params = {
  arrows: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  swipeToSlide: true,
  className: 'TabSlider'
};

const genre = ['전체', '회화', '서양화', '동양화', '조각', '공예', '설치미술'];

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  
  & > * {
    flex: 1;
  }
`


const Template = ({ page, title, data, selectedIndex }) => {
  const router = useRouter();
  const { filter } = router.query;

  const [slideIndex, setSlideIndex] = useState(0);

  const slideRef = useRef();

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
              <Title>{ title }</Title>
              <InlineBox marginLeft="10">
                <Link href="/">
                  <a>
                    <Search />
                  </a>
                </Link>
                <Link href="/">
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
          <LinkWrapper>
            {
              anchors.map(({ href, as: _as, text }, i) => {
                return (
                  <Button key={text + i} className={cx({ active: i === selectedIndex })}>
                    <Link href={href} as={_as}>
                      <a>{ text }</a>
                    </Link>
                  </Button>
                )
              })
            }
          </LinkWrapper>
          <Slider { ...params } ref={ slideRef }>
            {
              genre.map((v, i) => {
                return ( 
                  <div 
                    key={i} 
                    className={cx('anchor', { active: i === slideIndex })}
                    onClick={ () => handleSlideSelect(i) }
                  >
                    <Link href={`/${page}/[filter]`} as={`/${page}/all`}>
                      <a>{ v }</a>
                    </Link>
                  </div> 
                )
              })
            }
          </Slider>
          <ItemWrapper>
            {
              data.filter(v => filter === 'all' ? v : (v.genre === filter)).map(({ id, ...item}) => {
                return (
                  <Item key={id} {...item} />
                )
              })
            }
          </ItemWrapper>
        </Container>
      </Layout>
  )
}


export default Template;

