import React, { Component } from 'react';
import { View, Platform, Image, Text, Button, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Divider } from 'react-native-elements';
import { connect } from 'react-redux';

import Expo from 'expo';

// import MarkerComponent from '../components/MapMarkers'

import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';

const window = Dimensions.get('window');


class MapScreen extends Component {


  

  state = {
    appIsReady: 'Hello'
  }

  componentWillMount() {
  }



  // renderMarkers(){
  //   console.log("this works", this.props.mapMarkers)
  //   for(var i = 0; i < this.props.mapMarkers.locations.length; i++) {
  //     console.log("items", this.props.mapMarkers.locations[i])
  //     if (this.props.mapMarkers.locations[i].type == "pubmain"){
  //       console.log("pubmain")
  //       return (
  //         <Marker 
  //         key={this.props.mapMarkers.locations[i].id}
  //         coordinate={{ latitude: this.props.mapMarkers.locations[i].latitude, longitude: this.props.mapMarkers.locations[i].longitude }}
  //         title={this.props.mapMarkers.locations[i].name}
  //         description={this.props.mapMarkers.locations[i].description}
  //         image={require("../assets/icons/beer-jar.png")}
  //         />
  //       );
  //     }
  //   }
  // }

  render() {
    const { container, mapView } = styles;
    const { MapMarkers } = this.props.mapMarkers.locations
    console.log("props for markers", this.props.mapMarkers.locations)
    const markerImages = {
      pubmain: require("../assets/icons/beer-jar.png"),
      store: require("../assets/icons/beer-jar.png"),
      stadium: require("../assets/icons/beer-jar.png")
    };

    if (this.props.mapMarkers.locations){
      console.log('wooooooo')
    }

    return (
      <View>
        <View style={container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={mapView}
            initialRegion={{
                latitude: 30.26722,
                longitude: -97.7619,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
          >

          {/* {this.renderMarkers()} */}
          
          {this.props.mapMarkers.locations.map(MapMarker => 
          <Marker 
          key={MapMarker.id}
          coordinate={{ latitude: MapMarker.latitude, longitude: MapMarker.longitude }}
          title={MapMarker.name}
          description={MapMarker.description}
          image={markerImages[MapMarker.type]}
          />
          
          )} 
          
        </MapView>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {

    alignItems: 'center'
  },
  mapView: {
    width: window.width-10,
    height: window.height,
    borderRadius: 1,
    margin: 3,
  },
  imageStyle: {
    marginTop: 20,
    marginLeft: 10,
    width: 40,
    height: 40
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  dividerStyle: {
    width: SCREEN_WIDTH * 0.9,
    backgroundColor: '#2196F3'
  },
  buttonContainerStyle: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  }
};

const mapStateToProps = state => {
  return { mapMarkers: state.mapMarkers };
};

export default connect(mapStateToProps) (MapScreen);