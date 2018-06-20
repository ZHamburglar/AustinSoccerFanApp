import React, { Component } from 'react';
import { View, Platform, Image, Text, Button, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Divider } from 'react-native-elements';
import { connect } from 'react-redux';

import Expo from 'expo';

import MarkerComponent from '../components/MapMarkers'


import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';

const window = Dimensions.get('window');


const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});

class MapScreen extends Component {


  

  state = {
    appIsReady: 'Hello'
  }

  componentWillMount() {
  }


  render() {
    const { containerStyle, dividerStyle, buttonContainerStyle, container, mapView } = styles;

    const { MapMarkers } = this.props.mapMarkers.locations
    console.log("props for markers", this.props.mapMarkers.locations)

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
          
          {this.props.mapMarkers.locations.map(MapMarker => 
          <Marker 
          key={MapMarker.id}
          coordinate={{ latitude: MapMarker.latitude, longitude: MapMarker.longitude }}
          title={MapMarker.name}
          description={MapMarker.description}
          type={MapMarker.type}
          image={require('../assets/icons/beer-jar.png')}

          />)} 
          
          {/* <Marker 
          coordinate={{ latitude: 30.361358, longitude: -97.7161855 }} 
          title={"Mr. Tramps"}
          description={"Neighborhood pub features local & craft beers plus meals such as burgers, pizza & club sandwiches."}
          opacity={ .8}
          image={require('../assets/icons/beer-jar.png')}

          />
          <Marker 
          coordinate={{ latitude: 30.2848235, longitude: -97.7197796 }} 
          title={"Haymaker"}
          description={"Neighborhood pub features local & craft beers plus meals such as burgers, pizza & club sandwiches."}
          opacity={ .8}
          image={require('../assets/icons/beer-jar.png')}

          />
          <Marker 
          coordinate={{ latitude: 30.2982286, longitude: -97.7052838 }} 
          title={"B.D. Riley's @ Mueller"}
          description={"Neighborhood pub features local & craft beers plus meals such as burgers, pizza & club sandwiches."}
          opacity={ .8}
          image={require('../assets/icons/beer-jar.png')}

          />
          <Marker 
          coordinate={{ latitude: 30.267722, longitude: -97.743317 }} 
          title={"B.D. Riley's Downtown"}
          description={"Neighborhood pub features local & craft beers plus meals such as burgers, pizza & club sandwiches."}
          opacity={ .8}
          image={require('../assets/icons/beer-jar.png')}
          />
          <Marker 
          coordinate={{ latitude: 30.388073, longitude: -97.719939 }} 
          title={"Austin Stadium"}
          description={"Neighborhood pub features local & craft beers plus meals such as burgers, pizza & club sandwiches."}
          opacity={ .8}
          image={require('../assets/icons/stadium.png')}
          />
          <Marker 
          coordinate={{ latitude: 30.3731628, longitude: -97.72839 }} 
          title={"Soccer Corner"}
          description={"Neighborhood pub features local & craft beers plus meals such as burgers, pizza & club sandwiches."}
          opacity={ .8}
          image={require('../assets/icons/shop.png')}
          />
          
          <Marker 
          coordinate={{ latitude: 30.264563, longitude: -97.760819 }} 
          title={"Soccer Corner"}
          description={"Neighborhood pub features local & craft beers plus meals such as burgers, pizza & club sandwiches."}
          opacity={ .8}
          image={require('../assets/icons/shop.png')}
          /> */}

          
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