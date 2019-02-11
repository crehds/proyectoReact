import React, { Component } from 'react';
import HeroLayout from '../components/hero-layout.jsx';
import Logo from '../components/logo.jsx';
import Menu from '../components/menu.jsx';
import Header from '../components/header-layout.jsx';
import Template from '../../slider/Template.jsx';

class Hero extends Component {
  render() {
    return (
      <HeroLayout>
        <Header>
          <Logo
          src={this.props.header.imgIndustrial}
          />
          <Menu
          menu={this.props.header.menu}
          />
          <Logo
          src={this.props.header.imgClimatizacion}
          />
        </Header>
        <Template/>
      </HeroLayout>
    );
  }
}

export default Hero;
