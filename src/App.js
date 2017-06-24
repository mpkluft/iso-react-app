import React, { Component } from 'react';
import Header from './containers/header/header';
import Content from './containers/content/content';
import Footer from './containers/footer/footer';
import ContentData from './contentData';

export default class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Content news={ContentData}/>
        <Footer />
      </div>
    )
  }
}
