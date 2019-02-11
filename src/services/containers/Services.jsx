import React, { Component } from 'react';
import ServicesLayout from '../components/Services-Layout.jsx';

class Services extends Component {
  render() {
    return (
    <ServicesLayout>
      <div>
        <h2>Servicios</h2>
      </div>
      <div>Industrial</div>
      <div>Climatización</div>
      <div>Imágenes</div>
    </ServicesLayout>
  );}
}

export default Services;
