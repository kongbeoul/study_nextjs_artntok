import React, { useState, useCallback, useRef, memo } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const params = {
  arrows: false,
  dots: false,
  infinite: false,
  variableWidth: true,
  swipeToSlide: true,
  className: 'TabSlider'
}

export default memo(({ page, genre }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slideRef = useRef();

  const handleSlideSelect = useCallback(index => {
    setSlideIndex(index);
    slideRef.current.slickGoTo(index);
  }, [])

  return (
    <Slider {...params} ref={slideRef}>
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
  )
});