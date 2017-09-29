import { Store } from 'redux';
import { GameState } from './records';

export type Subscriber = (state: GameState) => void

let subscriber: Subscriber = (state) => {}; 

// Subscribe to the loop
export function subscribe(subber: Subscriber) {
    subscriber = subber;
}

/* MAIN GAME LOOP */
export function runLoop(deltaTime: number, store: Store<GameState>) {
    //I really don't know what this does just yet
    // but I suppose game logic goes here
}