import Template from '../../../../components/View';

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
  display: false,
  artCount: 24,
  likeCount: 12,
}];

const View = ({ info, me }) => {
  return (
    <Template 
      info={info}
      me={me} 
      title="ARTIST" 
      href="/artists/[filter]" 
      as="/artists/all" 
    />
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