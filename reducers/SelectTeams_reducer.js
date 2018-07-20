import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';
import {
    UNSELECT_TEAM,
    UNSELECT_ALL_TEAMS,
    SELECT_TEAM
} from '../actions/types';

const INITIAL_STATE = {

}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.likedJobs || [];
    case UNSELECT_ALL_TEAMS:
      console.log("clearing selections: ", action.type)  
      return {...state};
    case SELECT_TEAM:
      return _.uniqBy([
        action.payload, ...state
      ], 'jobkey');
    default:
      return state;
  }
}