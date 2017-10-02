import { Dispatch } from 'redux';
import { GameState } from '../../game_logic/records';
import * as types from './types';
import Robot from '../../game_logic/Robot';

export function initRobot (name: String, x: number, y: number, color: String, dispatch: Dispatch<GameState>) {

    let robot = new Robot(name, {x: x, y: y}, color);

    console.log('Initializing robot ' + name + ' at (' + x + ',' + y + ')');
    dispatch({
        type: types.ROBOT_INIT,
        payload: robot
    });
}