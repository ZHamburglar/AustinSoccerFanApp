import React, { Component } from 'react';
import { View, Platform, Image, Text, Button, ScrollView, ListView } from 'react-native';
import { Divider, CheckBox } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

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

class SupportersGroups extends Component {


  state = {
    appIsReady: false,
    checked: false

  }

  logtheprops(){
    console.log("hello")
  }
  


  render() {
    console.log("props", this.props.leagueteams)
    const { leagueteams } = this.props.leagueteams

    const { containerStyle, dividerStyle, buttonContainerStyle } = styles;

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
          <ScrollView>
          
            
            <Text>MLS</Text>
            <CheckBox
              title='Atlanta United'
              checked={this.state.checked}
              onPress={this.logtheprops}
            />
            <CheckBox
              title='Chicago Fire'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='Colorado Rapids'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='Columbus Crew SC'
              checked={this.state.checked}
              onPress={() => console.log("hello")}
            />
            <CheckBox
              title='DC United'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='FC Dallas'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='Houston Dynamo'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='LA Galaxy'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='LAFC'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='Minnesota United'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='Montreal Impact'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='New England Revolution'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='NYCFC'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='New York Red Bulls'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='Orlando City FC'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='Philadelphia Union'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='Portland Timbers'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='Real Salt Lake'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='San Jose Earthquakes'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='Seattle Sounders FC'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='Sporting KC'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='Toronto FC'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            <CheckBox
              title='Vancouver Whitecaps FC'
              checked={this.state.checked}
              onPress={() => this.setState({
                checked: !this.state.checked
              })}
            />
            
          </ScrollView>
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


const mapStateToProps = state => {
  return { leagueteams: state.leagueteams };
};

export default connect(mapStateToProps) (SupportersGroups);