/** Maybe change name on this file? - Pontus */
import { Dispatch } from 'redux';
import { GameState } from '../../game_logic/records';
import Robot from '../../game_logic/Robot';
import * as types from './types';

export default function updateGame(dTime: number, state: any, dispatch: Dispatch<GameState>) {
    //TODO
    let players = state.game.players;    
    for(var i = 0; i < players.length; i++) {
        let player = players[i];
        
        checkSensors(player.robot, state.game);

        if(!!player.script.update) {
            player.script.update(player.robot);
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