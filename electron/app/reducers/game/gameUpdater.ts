import { 
    GAME_UPDATE,
} from '../../actions/game/types';

const INITIAL_STATE = {
    robots: [
        {
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
        },
    ],
    tick: 0
}

const updateReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case GAME_UPDATE:
            return {...state, robots: action.payload};
        default:
            return state;
    }
}

export default updateReducer;