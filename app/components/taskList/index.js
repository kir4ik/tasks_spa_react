import React from 'react';
import { connect } from 'react-redux';
// components
import TaskItem from './TaskItem';
// actions
import { getTasksAll } from '../taskActions';
// selectors
import { getTasksActive } from '../taskReducer';

class TaskList extends React.Component {
    componentDidMount() {
        this.props.dispatch(getTasksAll());
    }

    render() {
        return <table className="table">
            <thead>
                <tr>
                    <th className="table__ceil">Name</th>
                    <th className="table__ceil">Tags</th>
                    <th className="table__ceil">Actual effort</th>
                    <th className="table__ceil">Estimated effort</th>
                    <th className="table__ceil">Due date</th>
                </tr>
            </thead>
            <tbody>
                {this.props.tasks.map((task) => {
                    return <TaskItem task={task} key={task.id} />
                })}
            </tbody>
        </table>;
    }
}

function mapStateToProps(state) {
    return {
        tasks: getTasksActive(state)
    };
}

export default connect(mapStateToProps)(TaskList);