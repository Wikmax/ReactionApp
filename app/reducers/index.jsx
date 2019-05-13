import {combineReducers} from 'redux';
import messagesReducer from './messages.jsx';

export default combineReducers({
    messages: messagesReducer,
});