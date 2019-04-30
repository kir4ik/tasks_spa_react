import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// components
import ShowInfo from './showInfo';
// actions
import { requestUpdateTask } from '../taskActions';
// selectors
import { getTasks } from '../taskReducer';

class TaskInfo extends React.Component {
    constructor(props) {
        super(props);

        this.task = props.tasks.find((task) => +task.id === +props.match.params.id);
    }

    handlerUpdateTask = (task) => {
        this.props.updateTask(task);
    }

    render() {
        const notFound = <div style={{width: '100%', textAlign: 'center'}}>
            task with id <mark>{this.props.match.params.id}</mark> not found
        </div>;

        return <div className="task-info">
            <Link to="/" className="link">Task List</Link>
            {this.task 
                ? <ShowInfo task={this.task} handlerUpdateTask={this.handlerUpdateTask} />
                : notFound}
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        tasks: getTasks(state)
    };
}

function mapDispatchToProps(dispatch) {
    return { updateTask: (data) => dispatch(requestUpdateTask(data)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskInfo);