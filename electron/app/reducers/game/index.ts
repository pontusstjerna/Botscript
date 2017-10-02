import { combineReducers } from 'redux';
import { GameState } from '../../game_logic/records';

import updateReducer from './gameUpdater';

export default combineReducers<GameState>({
    game: updateReducer,
});