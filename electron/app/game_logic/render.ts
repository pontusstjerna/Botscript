import {
    WIDTH,
    HEIGHT,
} from './constants';

import { GameState } from './records';

function renderBackground(context: CanvasRenderingContext2D) {
    context.fillRect(0,0, WIDTH, HEIGHT);
    // TODO
}

function renderRobots(context: CanvasRenderingContext2D, state: GameState, scaleFactor: number) {
    let robots = state.robots;
    for(var i = 0; i < robots.length; i++) {
        let robot = robots[i];
        context.drawImage(
            robot.model.body, 
            robot.pos.x, 
            robot.pos.y, 
            Math.round(robot.model.body.width * scaleFactor), 
            Math.round(robot.model.body.height)
        );
    }
}

export default function render(context: CanvasRenderingContext2D, state: GameState, scaleFactor: number) {
    context.clearRect(0, 0, WIDTH, HEIGHT);

    context.save();

    renderBackground(context);
    renderRobots(context, state, scaleFactor);
}