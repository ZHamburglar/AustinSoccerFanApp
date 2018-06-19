import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import {Agenda} from 'react-native-calendars';

class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  componentDidMount() {
    console.log('GrandChild did mount.');
    console.log("Component did mount", this.props.calendarDates.dates, this.props.calendarDates.dates[0])
    for (let i = 0; i < this.props.calendarDates.dates.length; i++) {
      //How many days in the future you want the calendar to populate

      if (!this.state.items[this.props.calendarDates.dates[i].date]) {
        this.state.items[this.props.calendarDates.dates[i].date] = [];

        this.state.items[this.props.calendarDates.dates[i].date].push({
          name: this.props.calendarDates.dates[i].name,
          height: Math.max(50, Math.floor(Math.random() * 150)),
          location: "Mr. Tramps"
        });
      } else {
        this.state.items[this.props.calendarDates.dates[i].date].push({
          name: this.props.calendarDates.dates[i].name,
          height: Math.max(50, Math.floor(Math.random() * 150)),
          location: "Mr. Tramps"
        })
      }






    }

  }

  render() {

    const { calendarDates } = this.props.calendarDates.dates
    console.log("props for dates", this.props.calendarDates.dates, this.props.calendarDates.dates[0])
    console.log(this.props.calendarDates.dates.length)


    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2018-06-17'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
      />
    );
  }

  loadItems(day) {
    console.log()
    console.log("day", day)
    // setTimeout(() => {

    //   console.log("length", this.props.calendarDates.dates.length, "datesssss", this.props.calendarDates.dates[0].date)

    //   for (let i = 0; i < this.props.calendarDates.dates.length; i++) {
    //     //How many days in the future you want the calendar to populate
    //     const time = day.timestamp + i * 24 * 60 * 60 * 1000;
    //     console.log("i", i, "time", time, "day", day)

    //     if (!this.state.items[this.props.calendarDates.dates[i].date]) {
    //       this.state.items[this.props.calendarDates.dates[i].date] = [];

    //       this.state.items[this.props.calendarDates.dates[i].date].push({
    //         name: this.props.calendarDates.dates[i].name,
    //         height: Math.max(50, Math.floor(Math.random() * 150)),
    //         location: "Mr. Tramps"
    //       });
    //     } else {
    //       this.state.items[this.props.calendarDates.dates[i].date].push({
    //         name: this.props.calendarDates.dates[i].name,
    //         height: Math.max(50, Math.floor(Math.random() * 150)),
    //         location: "Mr. Tramps"
    //       })
    //     }
    //   }
    //   console.log("items", this.state.items);
    //   const newItems = {};
    //   Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
    //   this.setState({
    //     items: newItems
    //   });
    // }, 1000);
    // // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

const mapStateToProps = state => {
  return { calendarDates: state.calendarDates };
};

export default connect(mapStateToProps) (CalendarScreen);