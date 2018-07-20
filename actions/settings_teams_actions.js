import {
    SETTINGS_SELECT_TEAM,
    SETTINGS_UNSELECT_TEAM,
    UNSELECT_ALL_TEAMS
  } from './types';
  
  export const settingsSelectTeam = payload => ({ 
    type: SETTINGS_SELECT_TEAM, 
    payload: true
  });

  export const settingsUnselectTeam = (team) => {
    console.log("team is being selected in redux")
    return {
      payload: team,
      type: SETTINGS_SELECT_TEAM
    }
  }

  export const unselectAllTeams = () => {
    console.log("Unselecting all teams")
    return { type: UNSELECT_ALL_TEAMS}
  }
