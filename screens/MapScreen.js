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
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      teamNames:""
    };
  }

  addSupporters(markerLocation, teamImages){
   
      
    
    // console.log("Supporter's groups", this.props.supportersGroups.MLS, this.props.supportersGroups.MLS[3])
    // Creates an array for teams to be put into when the conditions are met.
    var teamLogos = []

    for (i = 0; i < this.props.supportersGroups.MLS.length; i++) { 

      // console.log('events location', this.props.events[i].location, "marker location", markerLocation.MapMarker.id)
      if (this.props.supportersGroups.MLS[i].homebar == markerLocation.MapMarker.id){
        teamLogos.push(this.props.supportersGroups.MLS[i])
      }    
    }

    console.log("team logos",teamLogos, typeof teamLogos)
    if (teamLogos.length > 0){
      
      // console.log("this has teams", teamLogos[0].name)
      // for (i = 0; i < teamLogos.length; i++) { 
      //   console.log(teamLogos.length)
      //   // teamnames.append(teamLogos[i].name)
        
      // }
      // // This is where the logos will be generated when the conditions are met
      // return <Text>Hello</Text>

    } else (
      console.log("this doesn't have teams")
    )
  }

  addDailyEvents(markerLocation){
    // console.log("Adding daily events", markerLocation.MapMarker.id)
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    if (month < 10){
      var fullmonth = "0" + month
    } else {
      var fullmonth = month
    }
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    todayDate = year + "-" + fullmonth + "-" + day;
    let dailyEvents = []
    // console.log(todayDate, this.props.events, this.props.events.length, fullmonth)
    for (i = 0; i < this.props.events.length; i++) { 
      // console.log('events location', this.props.events[i].location, "marker location", markerLocation.MapMarker.id)
      if (todayDate === this.props.events[i].date && this.props.events[i].location == markerLocation.MapMarker.id){
        dailyEvents.push(this.props.events[i])
        return(
          <View>
            <Text>{this.props.events[i].eventDes}</Text>

          </View>
        )
      } 
    }
  }

  render() {
    const { container, mapView } = styles;
    const { MapMarkers } = this.props.mapMarkers.locations
    // console.log("props for markers", this.props.mapMarkers.locations)
    const markerImages = {
      pubmain: require("../assets/icons/beer-jar.png"),
      store: require("../assets/icons/shop.png"),
      stadium: require("../assets/icons/stadium.png"),
      park: require("../assets/icons/soccerfieldhorifilled.png")
    };

    const teamImages = {
      0: require("../assets/logos/MLS/AUFC_logo.png"),
      1: require("../assets/logos/MLS/CHI15_Primary.png"),
      2: require("../assets/logos/MLS/AUFC_logo.png"),
      3: require("../assets/logos/MLS/COL15_Primary.png"),
      4: require("../assets/logos/MLS/DCUnited.jpg"),
      5: require("../assets/logos/MLS/AUFC_logo.png"),
      6: require("../assets/logos/MLS/AUFC_logo.png"),
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
          image={markerImages[MapMarker.type]}
          >
            <Callout>
              <View>
                <Text>{MapMarker.name}</Text>
                <Text>{MapMarker.id}</Text>
                {this.addSupporters({MapMarker}, teamImages)}

                {this.addDailyEvents({MapMarker})}

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
  }
};

const mapStateToProps = state => {
  return { mapMarkers: state.mapMarkers,
          supportersGroups: state.leagueteams,
          events: state.calendarDates.dates
  };
};

export default connect(mapStateToProps) (MapScreen);