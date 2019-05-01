import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// pages
import TaskListPage from './Tasks/pages/TaskListPage';
import TaskInfoPage from './Tasks/pages/TaskInfoPage';
// main store
import { configureStore } from './store';
// styles
import './styles.css';

const store = configureStore();
const root = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={TaskListPage} />
                <Route path="/:id(\d+)" component={TaskInfoPage} />
            </Switch>
        </Router>
    </Provider>,
root);