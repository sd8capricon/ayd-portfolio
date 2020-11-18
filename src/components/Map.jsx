import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles ={
    width: "500px",  
    height: "300px",
    display:"inline-block"
};

export class MapContainer extends Component {
  render() {
    return (
    <div>
      <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={
          {
            lat: 19.0146542,
            lng: 72.8223423
          }
        }
      >
        <Marker onClick={this.onMarkerClick}
                name={'Architect Yogesh Dhaigude'} />
        </Map>      
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCKYHJEBvlPMwWJVAqhnEhp3oU9MrzLTg4'
})(MapContainer);