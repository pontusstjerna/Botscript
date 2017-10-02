import { Dispatch } from 'redux';
import { GameState } from '../../game_logic/records';
import * as types from './types';
import * as consts from '../../game_logic/constants';

const basePath = 'assets/game/sprites/robots/';

export function initRobot (name: String, x: number, y: number, colour: String, dispatch: Dispatch<GameState>) {

    let body = new Image();
    let cannon = new Image();
    let radar = new Image();
    body.src = basePath + colour + '_body_1.png';
    cannon.src = basePath + colour + '_canon.png';
    radar.src = basePath + colour + '_radar.png';

    console.log('Initializing robot ' + name + ' at (' + x + ',' + y + ')');
    dispatch({
        type: types.ROBOT_INIT,
        payload: {
            pos: {
                x: x,
                y: y
            },
            energy: consts.INITIAL_ENERGY,
            model: {
                body: body,
                cannon: cannon,
                radar: radar,
            },
            name: name, 
        }
    });
}