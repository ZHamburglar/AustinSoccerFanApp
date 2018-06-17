import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
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
    const { id, name } = this.props.leagueteams;
    console.log('boohoo', this.props.leagueteams)


    return (
    <TouchableWithoutFeedback onPress={this.switchState} 
        style={{
            height: 100,   
            width: 100,   
            backgroundColor: this.state.checked ? 'red' : 'green',   
            borderRadius: 10,
            borderWidth: 0.2,
            borderColor: this.state.checked ? 'red' : 'green'           
    }}
    key={id}
    >
    <View>
    <Icon
        name={this.state.checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
        color='#f50'
        type='material-community'
        onPress={this.switchState} />
    <Text>
    {name}
    </Text>

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
  }
};

// const mapStateToProps = (state, ownProps) => {
//   const expanded = state.selectedServerId === ownProps.server.id
//   return { expanded };
// };

export default connect(null, null)(SettingsTeams);
