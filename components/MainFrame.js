import styled from 'styled-components';
import VisualSlider from './VisualSlider';
import Section from './Section';
import SectionSlider from './SectionSlider';

const Contents = styled.div`
  background-color: #ededed;

  & .section:first-child {
    padding-top: 79px;
  }

  & .section + .section {
    margin-top: 10px;
  }
`;

const sliderParams = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slideToShow: 1,
  slidesToScroll: 1,
  variableWidth: true
}

const premium = {
  className: 'premium',
  itemInfo: [{
    thumbs: {
      width: 230,
      height: 230,
      url: "/images/temp/sample-thumb-01@3x.png",
      alt: '리브 포에버 이미지'
    },
    title: {
      size: 18,
      text: '리브 포에버'
    },
    organ: "하이트컬렉션",
    period: "2019.10.10 ~ 2019.12.08"
  }, {
    thumbs: {
      width: 230,
      height: 230,
      url: "/images/temp/sample-thumb-02@3x.png",
      alt: "리브 포에버 이미지"
    },
    title: {
      size: 18,
      text: '리브 포에버'
    },
    organ: "하이트컬렉션",
    period: "2019.10.10 ~ 2019.12.08"
  }]
};

const standard = {
  className: 'standard',
  itemInfo: [{
    thumbs: {
      width: 150,
      height: 150,
      url: "/images/temp/sample-thumb-03@3x.png",
      alt: "[2019 기획전3] 쌍벽 : 남농과 월전의 세계"
    },
    title: {
      size: 15,
      text: "[2019 기획전3] 쌍벽 : 남농과 월전의 세계"
    },
  }, {
    thumbs: {
      width: 150,
      height: 150,
      url: "/images/temp/sample-thumb-04@3x.png",
      alt: "[2019 기획전3] 쌍벽 : 남농과 월전의 세계"
    },
    title: {
      size: 15,
      text: "[2019 기획전3] 쌍벽 : 남농과 월전의 세계"
    },
  }, {
    thumbs: {
      width: 150,
      height: 150,
      url: "/images/temp/sample-thumb-05@3x.png",
      alt: "[2019 기획전3] 쌍벽 : 남농과 월전의 세계"
    },
    title: {
      size: 15,
      text: "[2019 기획전3] 쌍벽 : 남농과 월전의 세계"
    },
  }]
}

const spot = {
  className: 'spot',
  itemInfo: [{
    thumbs: {
      width: 90,
      height: 90,
      url: "/images/temp/sample-thumb-06@3x.png",
      alt: "테리보더 - 먹고, 즐기고, 사랑하라"
    },
    title: {
      size: 12,
      text: "테리보더 - 먹고, 즐기고, 사랑하라"
    },
  }, {
    thumbs: {
      width: 90,
      height: 90,
      url: "/images/temp/sample-thumb-07@3x.png",
      alt: "테리보더 - 먹고, 즐기고, 사랑하라"
    },
    title: {
      size: 12,
      text: "테리보더 - 먹고, 즐기고, 사랑하라"
    },
  }, {
    thumbs: {
      width: 90,
      height: 90,
      url: "/images/temp/sample-thumb-08@3x.png",
      alt: "테리보더 - 먹고, 즐기고, 사랑하라"
    },
    title: {
      size: 12,
      text: "테리보더 - 먹고, 즐기고, 사랑하라"
    },
  }, {
    thumbs: {
      width: 90,
      height: 90,
      url: "/images/temp/sample-thumb-09@3x.png",
      alt: "테리보더 - 먹고, 즐기고, 사랑하라"
    },
    title: {
      size: 12,
      text: "테리보더 - 먹고, 즐기고, 사랑하라"
    },
  }]
}

const superPink = {
  className: 'spot',
  itemInfo: [{
    thumbs: {
      width: 82,
      height: 82,
      radius: '50%',
      url: "/images/temp/sample-round-thumb-01@3x.png",
      alt: "김향기"
    },
    title: {
      size: 15,
      weight: 500,
      align: 'center',
      text: "김향기"
    }
  }, {
    thumbs: {
      width: 82,
      height: 82,
      radius: '50%',
      url: "/images/temp/sample-round-thumb-02@3x.png",
      alt: "김향기"
    },
    title: {
      size: 15,
      weight: 500,
      align: 'center',
      text: "김향기"
    }
  }, {
    thumbs: {
      width: 82,
      height: 82,
      radius: '50%',
      url: "/images/temp/sample-round-thumb-03@3x.png",
      alt: "김향기"
    },
    title: {
      size: 15,
      weight: 500,
      align: 'center',
      text: "김향기"
    }
  }, {
    thumbs: {
      width: 82,
      height: 82,
      radius: '50%',
      url: "/images/temp/sample-round-thumb-04@3x.png",
      alt: "김향기"
    },
    title: {
      size: 15,
      weight: 500,
      align: 'center',
      text: "김향기"
    }
  }]
}

export default () => {
  return (
    <>
      <VisualSlider />
      <Contents className="contents">
        <Section title="이렇게나 다양한 전시가 있어요! :D">
          <SectionSlider params={sliderParams} itemInfo={premium.itemInfo} className={premium.className} />
          <SectionSlider params={sliderParams} itemInfo={standard.itemInfo} className={standard.className} />
          <SectionSlider params={sliderParams} itemInfo={spot.itemInfo} className={spot.className} />
        </Section>
        <Section label="Super Pink" title="문화예술계의 새싹을 소개해드립니다 : )">
          <SectionSlider params={sliderParams} itemInfo={superPink.itemInfo} className={superPink.className} />
        </Section>
      </Contents>
    </>
  )
}