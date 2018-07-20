import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';
import {
    UNSELECT_TEAM,
    UNSELECT_ALL_TEAMS,
    SELECT_TEAM
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.likedJobs || [];
    case UNSELECT_ALL_TEAMS:
      return [];
    case SELECT_TEAM:
      return _.uniqBy([
        action.payload, ...state
      ], 'jobkey');
    default:
      return state;
  }
}