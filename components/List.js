import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';


class List extends Component {
   state = {
    checked: false
   }



   switchState = () => {
    
    this.setState(prevState => ({
        checked: !prevState.checked
    }));    
    }

   render() {
      return (
        <View> 
            <TouchableOpacity onPress={this.switchState} 
            style={{
           height: 120,   
           width: 120,   
           backgroundColor: this.state.checked ? 'red' : 'green',   
           borderRadius: 10,
           borderWidth: 2,
           borderColor: this.state.checked ? 'blue' : 'red'           
        }}>
        </TouchableOpacity>;

       
     </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})

