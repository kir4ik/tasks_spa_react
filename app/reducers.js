import { combineReducers  } from 'redux';
// Import Reducers
import tasks from './components/taskReducer';

// Combine all reducers into one root reducer
export default combineReducers({
    tasks
  });