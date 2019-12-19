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
