import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Image,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements'

import { connect } from 'react-redux';
// import * as actions from '../actions';


class SettingsTeams extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  state= {
      checked: false
  }

  switchState = () => {
    this.setState({checked: !this.state.checked})

    console.log("switching the state")
 }


  render() {
    const { logoSize, lineStyle, itemStyle, teamName } = styles;
    const { id, name, logo } = this.props.leagueteams;
    console.log('boohoo', {logo})

    const teamImages = {
      0: require("../assets/logos/MLS/AUFC_logo.png"),
      1: require("../assets/logos/MLS/CHI15_Primary.png"),
      2: require("../assets/logos/MLS/AUFC_logo.png"),
      3: require("../assets/logos/MLS/COL15_Primary.png"),
      4: require("../assets/logos/MLS/DCUnited.jpg"),
      5: require("../assets/logos/MLS/FCD15_Primary.png"),
      6: require("../assets/logos/MLS/HOU15_Primary.png"),
      7: require("../assets/logos/MLS/AUFC_logo.png"),
      8: require("../assets/logos/MLS/AUFC_logo.png"),
      9: require("../assets/logos/MLS/AUFC_logo.png"),
      10: require("../assets/logos/MLS/AUFC_logo.png"),
      11: require("../assets/logos/MLS/AUFC_logo.png"),
      12: require("../assets/logos/MLS/AUFC_logo.png"),
      13: require("../assets/logos/MLS/AUFC_logo.png"),
      14: require("../assets/logos/MLS/AUFC_logo.png"),
      15: require("../assets/logos/MLS/AUFC_logo.png"),
      16: require("../assets/logos/MLS/AUFC_logo.png"),
      17: require("../assets/logos/MLS/AUFC_logo.png"),
      18: require("../assets/logos/MLS/AUFC_logo.png"),
      19: require("../assets/logos/MLS/AUFC_logo.png"),
      20: require("../assets/logos/MLS/AUFC_logo.png"),
      21: require("../assets/logos/MLS/AUFC_logo.png"),
      22: require("../assets/logos/MLS/AUFC_logo.png"),
      23: require("../assets/logos/MLS/AUFC_logo.png"),
      24: require("../assets/logos/MLS/AUFC_logo.png"),
      25: require("../assets/logos/MLS/AUFC_logo.png"),
      26: require("../assets/logos/MLS/AUFC_logo.png"),
      27: require("../assets/logos/MLS/AUFC_logo.png"),
      28: require("../assets/logos/MLS/AUFC_logo.png"),
      29: require("../assets/logos/MLS/AUFC_logo.png")
    }


    return (
      <TouchableWithoutFeedback onPress={this.switchState} 
        style={lineStyle}
        key={id}
      >
        <View style={itemStyle}>
          
          <Icon
              name={this.state.checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
              color='#f50'
              type='material-community'
              onPress={this.switchState} />
          <Image 
          source={teamImages[id]}
          style={logoSize}
          />
          <View style={teamName}>
            <Text >
              {name}
            </Text>
          </View>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  },
  logoSize: {
    width: 50,
    height: 50
  },
  lineStyle: {
    height: 100,   
    width: 100,   
    borderRadius: 10,
    borderWidth: 0.2,
    flex: 1
  },
  itemStyle: {
    flexDirection: 'row',
    flex: 1
  },
  teamName: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
};

// const mapStateToProps = (state, ownProps) => {
//   const expanded = state.selectedServerId === ownProps.server.id
//   return { expanded };
// };

export default connect(null, null)(SettingsTeams);
