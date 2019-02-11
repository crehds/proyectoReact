import React, { Component } from 'react';
import HomeLayout from '../components/Home-layout.jsx';
import HandleError from '../../errors/containers/Handle-error.jsx';
import Hero from '../../hero/containers/Hero.jsx';
import History from '../../history/containers/History.jsx';

class Home extends Component {
  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Hero
            header={this.props.data.header}
          />
          <History
            history={this.props.data.history}
          />
        </HomeLayout>
      </HandleError>
    );
  }
}

export default Home;
