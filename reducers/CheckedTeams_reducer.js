import {
    SETTINGS_SELECT_TEAM,
    SETTINGS_UNSELECT_TEAM
  } from './types';

  const INITIAL_STATE = {
      checked: []
  };

  export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case SETTINGS_SELECT_TEAM:
        return action.payload;
      case SETTINGS_UNSELECT_TEAM:
        return action.payload;
      default:
        return state;
    }
  }