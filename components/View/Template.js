import { useContext } from 'react';
import { ViewContext } from '../../context/view';
import Layout from '../Layout';
import ViewHeader from './ViewHeader';
import ViewFrame from './ViewFrame';
import ViewBottom from './ViewBottom';
import ThumbsSlider from './ThumbsSlider';

export default ({ info, me, title, href, as: _as }) => {
  const { state } = useContext(ViewContext);
  const { visible } = state;

  return (
    <Layout>
      <ViewHeader title={title} href={href} as={_as} />
      <ViewFrame info={info} />
      <ViewBottom me={me} info={info} color="#333"/>
      {
        visible && <ThumbsSlider />
      }
    </Layout>
  )
}