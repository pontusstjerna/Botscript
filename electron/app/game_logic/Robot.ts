import { BASE_PATHS } from './constants';

export default class Robot {
    name: String;
    
    pos: {
        x: number,
        y: number,
    };
    
    energy: number;

    model: {
        body: HTMLImageElement
        cannon: HTMLImageElement
        radar: HTMLImageElement
    }

    constructor(name: String, pos: {x: number, y: number}, color: String) {
        this.name = name;
        this.pos = pos;
        this.loadImages(color);
    }

    private loadImages(color: String) {
        let body = new Image();
        let cannon = new Image();
        let radar = new Image();
        body.src = BASE_PATHS.ROBOTS + color + '_body_1.png';
        cannon.src = BASE_PATHS.ROBOTS + color + '_canon.png';
        radar.src = BASE_PATHS.ROBOTS + color + '_radar.png';

        let model = {
            body: body,
            cannon: cannon,
            radar: radar,
        }

        this.model = model;
    }

    // FUNCTION QUEUE SHOULD BE HERE
    //private callQueue = []; //Queue of operations to operate for every tick for this robot

    /** USER FUNCTIONS */
    ahead() { //TODO
        this.pos.y -= 1;
    }

    /** ADD MORE USER FUNCTIONS HERE */
    /** BIG TODOOOOOOO */
}