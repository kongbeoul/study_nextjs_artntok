import Template from '../../../components/List';

const data = [{
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
}];

const Artist = () => {
  return <Template page="artists" title='ARTIST' data={data} selectedIndex={0} />
}


export default Artist;

