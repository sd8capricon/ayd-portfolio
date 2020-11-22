import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles ={
    width: "100vw",  
    height: "690px"
};

export class MapContainer extends Component {
  onMouseoverMarker(props, marker, e) {
    // ..
  }
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
        <Marker onClick={this.onMouseoverMarker}
                name={'Architect Yogesh Dhaigude'} />
        </Map>      
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCKYHJEBvlPMwWJVAqhnEhp3oU9MrzLTg4'
})(MapContainer);