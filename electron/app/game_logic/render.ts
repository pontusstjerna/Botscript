import {
    WIDTH,
    HEIGHT,
    OFFSETS,
} from './constants';

import { GameState } from './records';

function renderBackground(context: CanvasRenderingContext2D) {
    context.fillRect(0,0, WIDTH, HEIGHT);
    // TODO
}

// The reason for the state's type of any here is because Redux is not yet fully supporting TypeScript
function renderRobots(context: CanvasRenderingContext2D, state: any, scaleFactor: number) {
    let robots = state.game.robots;
    for(var i = 0; i < robots.length; i++) {
        let robot = robots[i];
        
        // Body
        context.drawImage(
            robot.model.body, 
            robot.pos.x, 
            robot.pos.y, 
            Math.round(robot.model.body.width * scaleFactor), 
            Math.round(robot.model.body.height * scaleFactor)
        );

        // Cannon
        context.drawImage(
            robot.model.cannon, 
            robot.pos.x + OFFSETS.CANNON.x * scaleFactor, 
            robot.pos.y + OFFSETS.CANNON.y * scaleFactor, 
            Math.round(robot.model.cannon.width * scaleFactor), 
            Math.round(robot.model.cannon.height * scaleFactor)
        );

        // Radar
        context.drawImage(
            robot.model.radar, 
            robot.pos.x + OFFSETS.RADAR.x * scaleFactor, 
            robot.pos.y + OFFSETS.RADAR.y * scaleFactor, 
            Math.round(robot.model.radar.width * scaleFactor), 
            Math.round(robot.model.radar.height * scaleFactor)
        );
    }
}

export default function render(context: CanvasRenderingContext2D, state: GameState, scaleFactor: number) {
    context.clearRect(0, 0, WIDTH, HEIGHT);

    context.save();

    renderBackground(context);
    renderRobots(context, state, scaleFactor);
}