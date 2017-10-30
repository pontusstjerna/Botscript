import { 
    GAME_UPDATE,
    GAME_TICK,
    ROBOT_INIT,
} from '../../actions/game/types';

const INITIAL_STATE = {
    players: new Array(),
    tick: 0
}

const updateReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case GAME_UPDATE:
            return {...state, players: action.payload}; // Hmm?
        case GAME_TICK:
            return {...state, tick: state.tick + action.payload}
        case ROBOT_INIT:
            return {...state, players: state.players.concat([action.payload])}
        default:
            return state;
    }
}

export default updateReducer;