import { Store } from 'redux';
import { GameState } from './records';

export type Subscriber = (state: GameState) => void

let subscriber: Subscriber = (state) => {}; 

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

    //dt = dt / 1000;  // ms -> s
    //const dispatch = store.dispatch.bind(store);
  
    //const prevState = store.getState();
  
    //inputHandler(dt, prevState, dispatch);
  
    // dispatch({
    //   type: 'tick',
    //   //dt,
    // });
  
    //const newState = store.getState();
  
    subscriber(null);
}