import { combineReducers } from 'redux';
import updateReducer from './gameUpdater';

export default combineReducers({
    update: updateReducer,
});