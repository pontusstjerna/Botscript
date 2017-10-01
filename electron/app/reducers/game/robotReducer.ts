import {
    AHEAD
} from '../../actions/game/robotInterface';

const INITIAL_STATE = {
    pos: {
        x: 10,
        y: 50,
    },
    energy: 100,
    model: {
        body: new Image().src = '../../assets/game/sprites/robots/body_green_1.png',
        cannon: new Image().src = '../../assets/game/sprites/robots/body_green_1.png',
        radar: new Image().src = '../../assets/game/sprites/robots/body_green_1.png',
    }
}

const robotReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case AHEAD: 
            return {...state, pos: state.pos.x += 1};
        default:
            return state;
    }
}

export default robotReducer;