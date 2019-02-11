import React, { Component } from 'react';
import HomeLayout from '../components/Home-layout.jsx';
import HandleError from '../../errors/containers/Handle-error.jsx';
import Hero from '../../hero/containers/Hero.jsx';
import History from '../../history/containers/History.jsx';
import Services from '../../services/containers/Services.jsx';

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
          <Services
            services={this.props.data.services}
          />
        </HomeLayout>
      </HandleError>
    );
  }
}

export default Home;
