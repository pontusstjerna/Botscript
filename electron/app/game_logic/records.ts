
/** Represents the current state of the whole game */
export class GameState {
    robots: Array<Robot>;
    tick: number;
}

export class Robot {
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
}