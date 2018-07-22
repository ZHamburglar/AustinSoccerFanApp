// import _ from 'lodash';
// import { REHYDRATE } from 'redux-persist/constants';
import {
  SETTINGS_SELECT_TEAM,
  SETTINGS_UNSELECT_TEAM,
  UNSELECT_ALL_TEAMS
} from '../actions/types';

INITIAL_STATE = {
  checked: false
}


export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    // case REHYDRATE:
    //   return action.payload.likedJobs || [];
    // case UNSELECT_ALL_TEAMS:
    //   console.log("clearing selections: ", action.type)  
    //   return {...state};
    case SETTINGS_SELECT_TEAM:
      console.log("wooooooo")
      return state;
      // return _.uniqBy([
      //   action.payload, ...state
      // ], 'jobkey');
    default:
      return state;
  }
}