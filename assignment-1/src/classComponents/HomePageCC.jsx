import React, { Component } from 'react';
import HeaderCC from './HeaderCC';
import FooterCC from './FooterCC';
import SidebarCC from './SidebarCC';

export default class HomePageCC extends Component {
  render() {
    return (
        <>
        <HeaderCC />
        <SidebarCC />
        <FooterCC />    
      </>
    )
  }
}
