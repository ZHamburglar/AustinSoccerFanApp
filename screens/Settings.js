import React, { Component } from 'react';
import { View, 
  Platform, 
  Image, 
  Text, 
  Button, 
  ScrollView, 
  ListView,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import Config from 'react-native-config';
import * as actions from '../actions';


import Expo from 'expo';
import SettingsTeams from '../components/SettingsTeams';

import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';

const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});

Config.SOCCERTEAM_JSON_URL


class Settings extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.leagueteams.MLS);
  }


  // This is each item that is rendered.
  renderRow(leagueteams) {
    return <SettingsTeams 
      leagueteams={leagueteams}      
      checkItem={team => this.props.settingsSelectTeam(team)}
      keyProp="id"
      isChecked
    />;
  }

  state = {
    appIsReady: false
  }

  logtheprops(){
    console.log("hello")
  }
  


  render() {
    console.log("props", this.props.leagueteams.MLS, "EPL", this.props.leagueteams.EPL)
    const { leagueteams } = this.props.leagueteams

    const { listStyle, listBuffer,saveButton, buttonContainer } = styles;

    return (
      <View style={listStyle}>
        <View style={buttonContainer}>
          <Button 
            title="Save Selection"
            color="#FFFFFF"
            onPress= {() => console.log("button pressed")}
            style= {saveButton} />
            <Button 
            title="Clear Selection"
            color="#FFFFFF"
            onPress= {this.props.unselectAllTeams}
            style= {saveButton} />
        </View>
        
        <View style={listBuffer}>
          <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          />
        </View>
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
  },
  listStyle: {
    backgroundColor: '#2196F3',
  },
  listBuffer: {
    marginTop: 25,
    marginLeft: 20
  },
  saveButton:{
    height: 50,
    width: 50
  },
  buttonContainer:{
    
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 50,
    zIndex: 3
  }
};


const mapStateToProps = state => {
  return { leagueteams: state.leagueteams };
};

export default connect(mapStateToProps, actions) (Settings);