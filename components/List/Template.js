import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../Layout';
import Container from '../Layout/Container';
import ListHeader from './ListHeader';
import ItemList from './ItemList';
import LinkedList from './LinkedList';
import GenreSlider from './GenreSlider';
import './Template.css';

const anchors = [{
  href: '/artist/[filter]',
  as: '/artist/all',
  text: '작가명',
}, {
  href: '/genre/[filter]',
  as: '/genre/all',
  text: '장르',
}];

const genre = ['전체', '회화', '서양화', '동양화', '조각', '공예', '설치미술'];

const Template = ({ page, title, data, selectedIndex }) => {
  const router = useRouter();
  const { filter } = router.query;

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteringData = data.filter(v => filter === 'all' ? v : (v.genre === filter))
    setFilteredData(filteringData)
  }, [filter])


  return (
    <Layout>
      <ListHeader title={title} />
      <Container paddingTop="56">
        <LinkedList anchors={anchors} selectedIndex={selectedIndex} />
        <GenreSlider page={page} genre={genre} />
        <ItemList data={filteredData} />
      </Container>
    </Layout>
  )
}


export default Template;

