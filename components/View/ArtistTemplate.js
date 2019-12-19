import { useContext } from 'react';
import { ViewContext } from '../../context/view';
import Layout from '../Layout';
import ViewHeader from './ViewHeader';
import ArtistFrame from './ArtistFrame';
import ViewBottom from './ViewBottom';
import ThumbsSlider from './ThumbsSlider';

export default ({ info, me, title, href, as: _as }) => {
  const { state } = useContext(ViewContext);
  const { visible } = state;

  return (
    <Layout>
      <ViewHeader title={title} href={href} as={_as} />
      <ArtistFrame info={info} />
      <ViewBottom me={me} info={info} />
      {
        visible && <ThumbsSlider />
      }
    </Layout>
  )
}