import {
    SETTINGS_SELECT_TEAM,
    SETTINGS_UNSELECT_TEAM
  } from './types';
  
  export const settingsSelectTeam = payload => ({ 
    type: SETTINGS_SELECT_TEAM, 
    payload: true
  });

  export const settingsUnselectTeam = payload => ({ 
    type: SETTINGS_UNSELECT_TEAM, 
    payload: false
  });