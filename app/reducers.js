import { combineReducers  } from 'redux';
// Import Reducers
import tasks from './Tasks/TaskReducer';

// Combine all reducers into one root reducer
export default combineReducers({
    tasks
  });