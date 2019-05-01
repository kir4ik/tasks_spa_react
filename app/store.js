import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// reducers
import rootReducer from './reducers';

export function configureStore(initialState = {}) {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    
    return store;
}