import Slider from 'react-slick';
import SectionItem from './SectionItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default ({ params, itemInfo, className }) => {
  return (
    <Slider {...params} className={`section-slider ${className}`}>
      {
        itemInfo.map((item, index) => {
          return (
            <SectionItem key={index} {...item}/>
          )
        })
      }
    </Slider>
  )
}