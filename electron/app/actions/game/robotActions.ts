import { Dispatch } from 'redux';
import { GameState } from '../../game_logic/records';
import * as types from './types';
import Robot from '../../game_logic/Robot';

export function initRobot (name: String, x: number, y: number, color: String, dispatch: Dispatch<GameState>) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let script = eval(this.responseText);
            let robot = new Robot(name, {x: x, y: y}, color);

            let player = { script: new script(), robot: robot };

            dispatch({
                type: types.ROBOT_INIT,
                payload: player
            });

            console.log('Initialized robot ' + name + ' at (' + x + ',' + y + ')');
        }
    };
    // TODO: Should not be hard coded
    xhttp.open("GET", 'test_scripts/' + name + '.js', true); // Shouldn't this be .ts?
    xhttp.send();
}