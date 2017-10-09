import { 
    BASE_PATHS,
    LIMITS,
 } from './constants';
 
import RobotInterface from './RobotInterface';
import UserScript from './UserScript';

export default class Robot implements RobotInterface{
    script: UserScript; // The player's script. More TODO here

    name: String;
    
    // ORIGIN is in center of robot
    pos: {
        x: number,
        y: number,
    };

    /** 0 - 2PI radians */
    rotation: {
        body: number,
        cannon: number,
        radar: number,
    }
    
    energy: number;

    model: {
        body: HTMLImageElement
        cannon: HTMLImageElement
        radar: HTMLImageElement
    }

    /** EVENT SUBSCRIPTION */
    radarSubscriptions: Array<Function>;

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
        this.rotation = {
            body: Math.PI/2,
            cannon: Math.PI/4,
            radar: 0,
        }

        this.radarSubscriptions = new Array();
    }

    /** USER FUNCTIONS */

    /** EVENTS */
    subscribeRadar(callBack: Function) {
        this.radarSubscriptions.push(callBack);
    }

    /** MOVEMENT */
    //Speed / tick
    ahead(speed: number) {
        speed = Math.min(LIMITS.MAX_SPEED_PER_TICK, speed);
        this.pos.x += speed * Math.sin(this.rotation.body);
        this.pos.y -= speed * Math.cos(this.rotation.body);
    }
    
    turnBody(radians: number) {
        radians = Math.min(LIMITS.MAX_TURN_PER_TICK.body, radians);
        this.rotation.body = (this.rotation.body + radians) % (Math.PI * 2);
    }

    turnCannon(radians: number) {
        radians = Math.min(LIMITS.MAX_TURN_PER_TICK.cannon, radians);
        this.rotation.cannon = (this.rotation.cannon + radians) % (Math.PI * 2);
    }

    turnRadar(radians: number) {
        radians = Math.min(LIMITS.MAX_TURN_PER_TICK.radar, radians);
        this.rotation.radar = (this.rotation.radar + radians) % (Math.PI * 2);
    }

    /** ADD MORE USER FUNCTIONS HERE */
    /** BIG TODOOOOOOO */
}