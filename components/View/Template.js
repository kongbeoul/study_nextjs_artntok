import styled from 'styled-components';
import Layout from '../Layout';
import Container from '../Layout/Container';
import ViewHeader from './ViewHeader';
import Visual from './Visual';
import ViewInfo from './ViewInfo';
import ViewBottom from './ViewBottom';

const InfoWrapper = styled.div`
  width: 89vw;
  height: 77vh;
  padding: 50px 0 0 30px;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  top: 406px;
  z-index: 50;
  background-color: #fff;
`;


export default ({ info, me, title, href, as: _as }) => {
  return (
    <Layout>
      <ViewHeader title={title} href={href} as={_as} />
      <Container paddingTop="0">
        <Visual info={info} />
        <InfoWrapper>
          <ViewInfo {...info} />
        </InfoWrapper>
      </Container>
      <ViewBottom me={me} info={info} color="#333"/>
    </Layout>
  )
}