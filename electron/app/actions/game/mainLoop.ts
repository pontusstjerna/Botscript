import { Store } from 'redux';
import { GameState } from '../../game_logic/records';
import updateGame from './updater';
import * as types from './types';

export type Subscriber = (state: GameState) => void

var subscriber: Subscriber = (state) => {}; 

/*
* Subscription system allowing a component (the canvas) to subscribe to RunLoop updates instead of
* Redux updates, preventing >60fps re-renders
*/
export function subscribe(callBack: Subscriber) {
    subscriber = callBack;
}

/* MAIN GAME LOOP */
export function runLoopCallBack(deltaTime: number, store: Store<GameState>) {
    //I really don't know what this does just yet
    // but I suppose game logic goes here

    deltaTime = deltaTime / 1000;  // ms -> s
    const dispatch = store.dispatch.bind(store);

    const prevState = store.getState();

    updateGame(deltaTime, prevState, dispatch);
    
     dispatch({
       type: types.GAME_TICK,
       deltaTime,
     });

    const newState = store.getState();

    subscriber(newState);
}