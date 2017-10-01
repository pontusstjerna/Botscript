import { combineReducers } from 'redux';
import updateReducer from './gameUpdater';
import robotReducer from './robotReducer';

export default combineReducers({
    update: updateReducer,
    robot: robotReducer,
});