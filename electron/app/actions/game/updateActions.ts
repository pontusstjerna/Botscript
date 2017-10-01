/** Maybe change name on this file? - Pontus */
import { Dispatch } from 'redux';
import { GameState } from '../../game_logic/records';
import * as types from './types';

export default function updateGame(dTime: number, state: GameState, dispatch: Dispatch<GameState>) {
    //TODO
    dispatch({
        type: types.GAME_UPDATE,
        payload: [
            {
                ...state.robots[0].pos
            }
        ]
    })
}