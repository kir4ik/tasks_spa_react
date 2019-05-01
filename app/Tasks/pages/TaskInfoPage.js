import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// components
import TaskInfo from '../components/TaskInfo';
// actions
import { requestUpdateTask } from '../TaskActions';
// selectors
import { getTaskById } from '../TaskSelectors';

class TaskInfoPage extends React.Component {
    handlerUpdateTask = (data) => {
        if (data.id == null) return false; // must by id
        
        this.props.dispatch(requestUpdateTask(data));
        return true; // send data
    }

    render() {
        return <div className="wrap">
            <Link to="/" className="link">Task List</Link>
            <hr/>
            {this.props.task.id == null
                &&
                <div className="not-found">Task Not Found</div>
                ||
                <TaskInfo task={this.props.task} updateTask={this.handlerUpdateTask} />
            }
        </div>
    }
}

function mapStateToProps(state, ownProps) {
    return {
        task: getTaskById(state, ownProps.match.params.id)
    };
}

export default connect(mapStateToProps)(TaskInfoPage);