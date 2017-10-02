import Robot from './Robot';

/** Represents the current state of the whole game */
export class GameState {
    robots: Array<Robot>;
    tick: number;
}