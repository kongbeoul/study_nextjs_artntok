import Template from '../../../../components/View/ExhibitionTemplate';

const me = {
  liked: false,
}

const exhibitionData = [{
  id: '001',
  src: '/images/temp/sample-detail-02@3x.png',
  categorys: [{
    color: '#666',
    text: '개인전'
  }, {
    color: '#004be1',
    text: '서양화'
  }],
  title: '피서: 더위를 피하는 방법',
  artist: '방혜자',
  period: '2019.10.18 ~ 2020.01.12',
  place: {
    name: '갤러리LVS',
    location: '서울 강남구 도산대로27길 33'
  },
  commentCount: 34,
  likeCount: 49,
  generalOutline: '영은미술관은 프랑스 파리에 세르누치 박물관 전시와 연계해 오는 2019년 10월 5일부터 2020년 1월 12일까지 방혜자 화백의 ‘빛에서 빛으로 Lumière née de la lumière’ 展을 개최한다. 이번 전시는 60여 년간 자신만의 독특한 조형 언어로 작품 활동을 하고 있는 방혜자 화백에 대한 존경과 경의를 담아 기획 되었다.\n방화백은 1961년 도불 후 프랑스와 한국을 오가며 왕성한 작품 활동을 하고 있으며, 19년간 영은 미술관 창작 스튜디오 YAMP 입주 작가이자, 한국 현대미술을 대표하는 작가 중 하나로 세계 여러 곳에서 100회가 넘는 개인전을 개최 했다.\n이번 전시는 프랑스 파리에 위치한 세르누치 박물관 전시를 연계하여 진행하고 있으며, 프랑스를 대표하는 샤르트르 대성당 종교 참사회의실에 새로 설치되는 방화백의 작품 4개의 스테인드 글라스 창 중에 북쪽 제1창 <빛의 탄생>을 실제 크기의 반으로 제작된 모형을 한국에서 처음 선보이는 자리다\n2019년 1월 17일부터 5월 5일까지 세르누치 박물관에서 열렸던 <방혜자 - 마티에르는 빛이 된다> 특별전 전시 커미셔너인 마엘 벨렉은 전시 서문에서 ‘프랑스와 한국의 문화 교류에 중심적인 역할을 해 온 방혜자 화백은… 그의 주변에 기쁨과 아름다움을 심기 위해, 또 독창적인 창작을 표현하기 위해 물성, 자연 채색의 색소, 그림 기법을 탐구하고 있습니다.’고 했다.\n샤르트르 대성당은 고딕양식의 걸작으로 불리며 매년 100만 명 이상의 관광객과 25만 명의 순례자가 찾는 유네스코 세계문화유산이다. 12~13세기 스테인드글라스 창이 잘 보존되어 있으며 대성당을 장식하고 있는 스테인드글라스 작품은 약 172점이나 된다. 2018년 전통을 지키고 현대 미술의 접목을 위해 스테인드글라스 창작품을 공모했다. 이에 방화백은 독일 페테르스 공방의 제안으로 함께 응모해 18명의 심사위원의 6개월간의 심사 끝에 최종적으로 선정되었다. 방화백의 스테인드글라스는 빛과 생명, 사랑, 평화의 메시지를 담고 있다.',
  locationInfo: [
    { tit: '위치', desc: '서울특별시 강남구 도산대로27길 33' },
    { tit: '관람시간', desc: 'AM09:00 ~ PM06:00 (월-금)\nAM10:00 ~ PM05:00 (토)' },
    { tit: '휴관일', desc: '매주 일요일, 공휴일' },
    { tit: '연락처', desc: '02)3443-7475' },
    { tit: '홈페이지', desc: 'http://www.gallerylvs.org'} 
  ]
}];


const ExhibitionView = ({ info, me }) => {
  return (
    <Template title="전시정보" info={info} me={me} />
  )
};

ExhibitionView.getInitialProps = async ({ query }) => {
  const { id } = query;

  const [ info ] = exhibitionData.filter(v => v.id === id);
  return { 
    info,
    me
  }
}

export default ExhibitionView;
