import React, { Component } from 'react';
import { View, Platform, Image, Text, Button } from 'react-native';
import { Divider } from 'react-native-elements';
import Expo from 'expo';
import KeysButtons from '../components/KeysButtons';
import CapoButtons from '../components/CapoButtons';
import CapoKey from '../components/CapoKey';
import BottomNavBar from '../components/BottomNavBar';

import ChordsModal from '../modals/ChordsModal';
import ViewChordsButton from '../components/ViewChordsButton';
import icon from '../assets/icons/pure-icon.png';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';

const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});

class MainScreen extends Component {
  static navigationOptions = () => ({
    title: 'News',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#2196F3'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
      color: 'white'
    },
    headerLeft: (
      <Image
        source={icon}
        style={styles.imageStyle}
      />
    )
  });

  state = {
    appIsReady: false
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
    const { containerStyle, dividerStyle, buttonContainerStyle } = styles;

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <ChordsModal />

        <View style={containerStyle}>
          <KeysButtons />
          <Divider style={dividerStyle} />
          <CapoButtons />
          <Divider style={dividerStyle} />
          <Button 
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Settings')} />
          <CapoKey />
        </View>

        <BottomNavBar />
      </View>
    );
  }
}

const styles = {
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

export default MainScreen;