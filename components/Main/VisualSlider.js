import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import VisualItem from './VisualItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Visual.css';


const VisualSlider = ({ exhibition }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
  }

  return (
    <Slider {...settings}>
      {
        exhibition.map(item => {
          return (
            <React.Fragment key={item.id}>
              <Link href="/view/exhibition/[id]" as="/view/exhibition/001">
                <a>
                  <VisualItem item={item} />
                </a>
              </Link>
            </React.Fragment>
            )
        })
      }
    </Slider>
  )
}

export default VisualSlider;