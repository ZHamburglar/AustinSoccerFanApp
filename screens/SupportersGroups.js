import React, { Component } from 'react';
import { View, Platform, Image, Text, Button, ScrollView, ListView } from 'react-native';
import { Divider, CheckBox } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import Expo from 'expo';
import CapoKey from '../components/CapoKey';
import BottomNavBar from '../components/BottomNavBar';
import SettingsTeams from '../components/SettingsTeams';

import icon from '../assets/icons/pure-icon.png';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';

const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});

class SupportersGroups extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.leagueteams.MLS);
  }

  renderRow(leagueteams) {
    return <SettingsTeams leagueteams={leagueteams} />;
  }

  state = {
    appIsReady: false,
    checked: false

  }

  logtheprops(){
    console.log("hello")
  }
  


  render() {
    console.log("props", this.props.leagueteams.MLS, "EPL", this.props.leagueteams.EPL)
    const { leagueteams } = this.props.leagueteams

    const { containerStyle, dividerStyle, buttonContainerStyle } = styles;

    return (
      <ListView
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />
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


const mapStateToProps = state => {
  return { leagueteams: state.leagueteams };
};

export default connect(mapStateToProps) (SupportersGroups);