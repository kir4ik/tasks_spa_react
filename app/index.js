import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// components
import TaskList from './components/taskList';
import TaskInfo from './components/tasksInfo';
// reducers
import reducers from './reducers';
// styles
import './styles.css';

const store = createStore(reducers, {}, applyMiddleware(thunk));
const root = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={TaskList} />
                <Route path="/:id(\d+)" component={TaskInfo} />
            </Switch>
        </Router>
    </Provider>,
root);