import { ViewProvider } from '../../../../context/view';
import { RepresentProvider } from '../../../../context/represent';
import ArtistTemplate from '../../../../components/View/ArtistTemplate';

const me = {
  liked: true,
}

const userData = [{
  id: '001',
  src: '/images/temp/sample-detail-01@3x.png',
  name: '김준면',
  engName: 'Junmyeon Kim',
  category: '동양화',
  birth: 1991,
  url: 'www.artntok.com',
  artCount: 24,
  likeCount: 12,
  display: false,
  displayInfo: '',
  history : {
    edu: ['한국예술종합학교 동양화 전공 졸업'],
    description: {
      person: ['2016 김지희 초대전 Floating Wonderland.'],
      group: ['이상한 나라의 미술관 : Paradise', '까치와 호랑이', 'ART LAB [표갤러리 남산 본관]', '100 Albums 100 Artists', 'LA Art Show [LA]']
    },
  }
}];

const View = ({ info, me }) => {
  return (
    <ViewProvider>
      <RepresentProvider>
        <ArtistTemplate 
          info={info}
          me={me} 
          title="ARTIST" 
          href="/artists/[filter]" 
          as="/artists/all" 
        />
      </RepresentProvider>
    </ViewProvider> 
  )
}

View.getInitialProps = async ({ query }) => {
  const { id } = query;

  const [ info ] = userData.filter(v => v.id === id);
  return { 
    info,
    me
  }
}

export default View;