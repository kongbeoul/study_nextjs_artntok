import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../../../components/Layout';
import Header, { Inner } from '../../../components/Layout/Header';
import Container from '../../../components/Layout/Container';
import { HeaderProvider } from '../../../context';
import { Prev, Search, Location, InlineBox, SmallTitle, NoItem } from '../../../components/Styled'
import { Tabs, TabButtonWrapper, TabPanel } from '../../../components/Tabs';
import { ArtistVisual, ArtistBottom, ArtistInfo } from '../../../components/Artist';

const ArtistContiainer = styled(Container)`
  padding: 0;
  width: 89vw;
  height: 83vh;
  position: absolute;
  top: 450px;
  right: 0;
  z-index: 50;
  background-color: #fff;
`

const ArtistContainerInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0 0 30px;
  box-sizing: border-box;
  overflow-y: auto;
`



const artistData = [{
  id: "001",
  user: {
    category: '동양화',
    name: '김준면',
    engName: 'Junmyeon Kim',
    birth: '1991',
    url: 'www.artntok.com/',
    display: false, 
  },
  data: [
    null, 
    {
      edu: '한국예술종합학교 동양화 전공 졸업',
      introduce: {
        person: [
          '2016 김지희 초대전 Floating Wonderland'
        ],
        group: [
          '이상한 나라의 미술관 : Paradise',
          '까치와 호랑이',
          'ART LAB [표갤러리 남산 본관]',
          '100 Albums 100 Artists',
          'LA Art Show [LA]'
        ]
      }
    },
    null
  ],
}]

const anchors = ['전시정보', '작가약력', '대표작품'];

const ArtistDetail = () => {
  const router = useRouter();
  const { filter, detail } = router.query;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelect = useCallback(index => setSelectedIndex(index), []);


  const artist = artistData.filter(v => {
    return v.id === detail
  });

  return (
    <Layout>
      <HeaderProvider>
        <Header top="44">
          <Inner>
            <InlineBox marginLeft="10">
              <Link href="/artist/[filter]" as={`/artist/all`}>
                <a>
                  <Prev />
                </a>
              </Link>
              <SmallTitle color="#fff">ARTIST</SmallTitle>
            </InlineBox>
            <InlineBox marginLeft="10">
              <Link href="/aritst/[filter]" as={`/artist/all`}>
                <a>
                  <Search main />
                </a>
              </Link>
              <Link href="/artist/[filter]" as={`/artist/all`}>
                <a>
                  <Location main />
                </a>
              </Link>
            </InlineBox>
          </Inner>
        </Header>
      </HeaderProvider>
      <ArtistVisual src="/images/temp/sample-detail-01@3x.png" alt="김준면" />
      <ArtistContiainer>
        <ArtistContainerInner>
          <div>
            {
              artist.map(({ id, user }) => {
                return <ArtistInfo key={id} {...user} />
              })
            }
          </div>
          <Tabs>
            <TabButtonWrapper anchors={anchors} selectedIndex={selectedIndex} onSelect={handleSelect} />
            <TabPanel>
              {
                (artist.map(({ data }) => data))[0][selectedIndex] 
                ? <div></div>
                : <NoItem text="전시" /> 
              }
            </TabPanel>
          </Tabs>
        </ArtistContainerInner>
      </ArtistContiainer>
      <ArtistBottom artCount={24} likeCount={12} liked={true} color="#333" />
    </Layout>
  )
}

export default ArtistDetail;