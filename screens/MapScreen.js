import React, { Component } from 'react';
import { View, Platform, Image, Text, Button, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
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

  iconHasBeenPressed(){
    console.log("wooo this is pressed")
  }

  addDailyEvents(){
    console.log("Adding daily events")
  }

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
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
      todayDate = year + "-" + month + "-" + day;


      console.log(todayDate, this.props.events, this.props.events.length)
      for (i = 0; i < this.props.events.length; i++) { 
        console.log(i, this.props.events[i].date, todayDate)
        // if(this.props.events[i].date === todayDate){
        //   console.log("hello")
        // }
      }

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
          >
            <Callout>
              <View>
                <Text>{MapMarker.name}</Text>
                <Text>SG's</Text>
                <Text>{MapMarker.id}</Text>
                {this.addDailyEvents()}

              </View>
            </Callout>
          </Marker>
          
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
  return { mapMarkers: state.mapMarkers,
          supportersGroups: state.leagueteams,
          events: state.calendarDates.dates
  };
};

export default connect(mapStateToProps) (MapScreen);