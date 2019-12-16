import Slider from 'react-slick';
import VisualItem from './VisualItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Visual.css';

const items = [
  {
    id: "001",
    url: "/images/temp/img@3x.png",
    slogan: '일상 속 내 본연의 온전한 모습',
    typo: 'Open Run 손소연展',
    period: '2019.10.18~2020.01.12',
    organ: '이공갤러리',
    comment: 15,
    liked: false,
    likeCount: 28,
  },
  {
    id: "002",
    url: "/images/temp/img-02@3x.png",
    slogan: '그 시절 나에게 안부를 묻는 따뜻한 시간',
    typo: 'Red Bench',
    period: '2019.10.18~2020.01.12',
    organ: '도로시 살롱',
    comment: 61,
    liked: true,
    likeCount: 45,
  },
  {
    id: "003",
    url: "/images/temp/img-03@3x.png",
    slogan: '현시대에 맞춰 해석된 ‘와유(臥遊)',
    typo: '피서: 더위를 피하는 방법',
    period: '2019.10.18~2020.01.12',
    organ: '이천시립월전미술관',
    comment: 35,
    liked: false,
    likeCount: 46,
  },
]

const VisualSlider = () => {
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
        items.map(item => {
          return <VisualItem key={item.id} item={item} />
        })
      }
    </Slider>
  )
}

export default VisualSlider;