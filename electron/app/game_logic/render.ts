import {
    WIDTH,
    HEIGHT,
} from './constants';

import Robot from './Robot';
import { GameState } from './records';

function renderBackground(context: CanvasRenderingContext2D) {
    context.fillRect(0,0, WIDTH, HEIGHT);
    // TODO
}

// The reason for the state's type of any here is because Redux is not yet fully supporting TypeScript
function renderRobots(context: CanvasRenderingContext2D, state: any, scaleFactor: number) {
    let robots = <Array<Robot>>state.game.robots;
    
    // TODO: Rotations and a lot of more stuff
    
    for(var i = 0; i < robots.length; i++) {
        let robot = robots[i];
        
        // Body
        renderSprite(
            context, 
            robot.model.body,
            robot.pos.x,
            robot.pos.y,
            robot.rotation.body,
            scaleFactor,
            0);

        // Cannon
        renderSprite(
            context,
            robot.model.cannon,
            robot.pos.x + 30 * scaleFactor * Math.sin(robot.rotation.cannon),
            robot.pos.y - 30 * scaleFactor * Math.cos(robot.rotation.cannon), // Vertical offset of radar
            robot.rotation.cannon,
            scaleFactor,
            0
        );

        // Radar
        renderSprite(
            context,
            robot.model.radar,
            robot.pos.x,
            robot.pos.y,
            robot.rotation.radar,
            scaleFactor,
            0
        );
    }
}

function renderSprite(
    context: CanvasRenderingContext2D, image: HTMLImageElement, 
    x: number, y: number, rotation: number, scale: number, frame: number) {

        let w = image.width;
        let h = image.height;

        context.translate(x, y);
        context.rotate(rotation);
        context.drawImage(
            image,
            0 + (w * frame),
            0,
            w, h, - (w * scale) / 2, - (h * scale) / 2, w * scale, h * scale
        );
        context.rotate(-rotation);
        context.translate(-x, -y);
}

export default function render(context: CanvasRenderingContext2D, state: GameState, scaleFactor: number) {
    context.clearRect(0, 0, WIDTH, HEIGHT);

    context.save();

    renderBackground(context);
    renderRobots(context, state, scaleFactor);
}