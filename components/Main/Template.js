import { Fragment, memo } from 'react';
import Layout from '../Layout'
import Header from './MainHeader';
import Visual from './VisualSlider';
import MainFrame from './MainFrame';
import Footer from '../Layout/Footer';

export default memo(({ exhibition, premium, standard, spot, superbPink }) => {
  return (
    <Layout>
      <Header />
      <Fragment>
        <Visual exhibition={exhibition} />
        <MainFrame 
          premium={premium}
          standard={standard}
          spot={spot}
          superbPink={superbPink}
        />
      </Fragment>
      <Footer />
    </Layout>
  )
})