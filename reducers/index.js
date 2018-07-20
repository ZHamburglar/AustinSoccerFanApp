import { combineReducers } from 'redux';
import keysReducer from './keys_reducer';
import selectedValuesReducer from './selections_reducer';
import modalReducer from './modal_reducer';
import LeagueTeamsReducer from './LeagueTeams_reducer';
import CalendarDatesReducer from './CalendarDates_reducer';
import AustinMapMarkers from './AustinMapMarkers_reducer';


// with redux persist you no longer need the export default combineReducers({ keys, selectedValues blah})
export default ({
  keys: keysReducer, 
  selectedValues: selectedValuesReducer, 
  modal: modalReducer,
  leagueteams: LeagueTeamsReducer,
  mapMarkers: AustinMapMarkers,
  calendarDates: CalendarDatesReducer
});