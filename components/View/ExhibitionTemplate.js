import Layout from '../Layout';
import ViewHeader from './ViewHeader';
import ExhibitionFrame from './ExhibitionFrame';
import ExhibitionBottom from './ExhibitionBottom';

export default ({ info, me, title }) => {
  return (
    <Layout>
      <ViewHeader title={title} href="/" />
      <ExhibitionFrame info={info} />
      <ExhibitionBottom me={me} info={info} />
    </Layout>
  )
}