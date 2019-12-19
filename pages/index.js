import Template from '../components/Main';

const exhibition = [
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

const premium = [{
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

const standard = [{
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


const spot = [{
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

const superbPink = [{
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


const Index = () => {
  return (
    <Template 
      exhibition={exhibition}
      premium={premium} 
      standard={standard}
      spot={spot}
      superbPink={superbPink}
    />
  );
}

export default Index;