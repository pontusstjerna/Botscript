/** Maybe change name on this file? - Pontus */
import { Dispatch } from 'redux';
import { GameState } from '../../game_logic/records';
import Robot from '../../game_logic/Robot';
import * as types from './types';

export default function updateGame(dTime: number, state: any, dispatch: Dispatch<GameState>) {
    //TODO

    let robots = state.game.robots;
    for(var i = 0; i < robots.length; i++) {
        let robot = <Robot>robots[i];
        
        if(robot.pos.y > 50)
            robot.ahead(); // This would be a call from the user

        // ONLY FOR TESTING ROTATION
        if(i === 0) {
            robot.turn(0.0017);
            robot.turnCannon(-0.03);
            robot.turnRadar(0.05);
        } else {
            robot.turn(-0.017);
            robot.turnCannon(0.03);
            robot.turnRadar(-0.005);
        }
    }

    dispatch({
        type: types.GAME_TICK,
        payload: dTime,
    });
}