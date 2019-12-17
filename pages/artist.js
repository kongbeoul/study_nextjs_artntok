import React, { Component } from 'react'
import Layout from '../components/Layout';
import ListFrame from '../components/ListFrame'

const artistListData = [

]


export default class Artist extends Component {
  static getInitialProps({ pathname }) {
    return { pathname }
  }

  render() {
    const { pathname } = this.props;
    return (
      <Layout pathname={pathname} sub={true}>
        <ListFrame />
      </Layout>
    )
  }
}

