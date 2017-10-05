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
        
        checkSensors(robot, state.game);











        // TEST
        robot.ahead(3); // This would be a call from the user

        // ONLY FOR TESTING ROTATION
        if(i === 0) {
            robot.turnBody(-0.05);
            robot.turnCannon(-0.03);
            robot.turnRadar(0.05);
        } else {
            robot.turnBody(-0.017);
            robot.turnCannon(0.03);
            robot.turnRadar(-0.005);
        }
    }

    dispatch({
        type: types.GAME_TICK,
        payload: dTime,
    });
}

function checkSensors(currentRobot: Robot, gameState: GameState) {
    checkRadar(currentRobot, gameState);
}

function checkRadar(currentRobot: Robot, gameState: GameState) {
    // Fire events
    for(let i = 0; i < currentRobot.radarSubscriptions.length; i++) {
        // Logic here

        if (true /* Radar beam of robot intersect any other robot */) {
            currentRobot.radarSubscriptions[i]();
        }
    }
}