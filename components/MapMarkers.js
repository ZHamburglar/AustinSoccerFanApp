import React, { Component } from 'react';
import { View, Platform, Image, Text, Button, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Divider } from 'react-native-elements';
import Expo from 'expo';

import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import icon from '../assets/icons/pure-icon.png';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';

const window = Dimensions.get('window');


const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});

class MapMarkers extends Component {


  state = {
 
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([icon]);
    await Promise.all([...imageAssets]);
    this.setState({ appIsReady: true });
  }

  render() {
    const { containerStyle, dividerStyle, buttonContainerStyle, container, mapView } = styles;

    return (
          <Marker 
          coordinate={{ latitude: 30.361358, longitude: -97.7161855 }} 
          title={"Mr. Tramps"}
          description={"Neighborhood pub features local & craft beers plus meals such as burgers, pizza & club sandwiches."}
          opacity={ .8}
          image={require('../assets/icons/beer-jar.png')}
          />
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

export default MapMarkers;