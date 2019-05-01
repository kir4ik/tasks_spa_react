import React from 'react';
import { connect } from 'react-redux';
// components
import TaskListTable from '../components/TaskListTable';
// selectors
import { getTasksActive } from '../TaskSelectors';

class TaskListPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.tableAgreement = [
            {propName: 'name',              title: 'Name', isLink: true},
            {propName: 'tags',              title: 'Tags'},
            {propName: 'actual_effort',     title: 'Actual effort'},
            {propName: 'estimated_effort',  title: 'Estimated effort'},
            {propName: 'due_date',          title: 'Due date', isDate: true}
        ];
    }

    render() {
        return <div className="wrap">
            <TaskListTable tasks={this.props.tasks} tableAgreement={this.tableAgreement} />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        tasks: getTasksActive(state)
    };
}

export default connect(mapStateToProps)(TaskListPage);