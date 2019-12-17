import React, { Component } from 'react'
import Layout from '../components/Layout';
import MainFrame from '../components/MainFrame';

export default class Home extends Component {
  static getInitialProps({ pathname }) {
    return { pathname }
  }

  render() {
    const { pathname } = this.props; 
    return (
      <>
        <Layout pathname={pathname} >
          <MainFrame />
        </Layout>
      </>
    ) 
  }
}

