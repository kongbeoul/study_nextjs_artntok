import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

export default ({ children }) => {
  return (
    <Layout>
      { children }
    </Layout>
  )
}