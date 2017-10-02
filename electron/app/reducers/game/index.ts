import { combineReducers } from 'redux';
import { GameState } from '../../game_logic/records';

import updateReducer from './gameUpdater';
import robotReducer from './robotReducer';

export default combineReducers<GameState>({
    update: updateReducer,
    robot: robotReducer,
});