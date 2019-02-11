import React, { PureComponent } from 'react';
import './logo.css';

class Logo extends PureComponent {
  render () {
    return (
      <div className="logo">
        <img src={this.props.src} alt="imagen del logo"/>
      </div>
    );
  }
}

export default Logo;
