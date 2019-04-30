import React from 'react';
// format output data
import { getVal, dateFormat } from '../../utils/formatData';
// components
import TaskTitle from './taskTitle';
import TaskItem from './taskItem';

class ShowInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    updateTitle = (title) => {
        const task = this.props.task;
        task.name = title;
        this.props.handlerUpdateTask(task);
    }

    render() {
        const task = this.props.task;
        if (!task.id) return null;
            
        return <div className="task-info">
            <TaskTitle title={getVal(task.name)} onBlur={this.updateTitle} />
            <TaskItem name={'description:'} val={getVal(task.description)} />
            <TaskItem name={'obj_status:'} val={getVal(task.obj_status)} />
            <TaskItem name={'is_completed:'} val={(!!task.is_completed).toString()} />
            <TaskItem name={'is_archived:'} val={(!!task.is_archived).toString()} />
            <TaskItem name={'estimated_effort:'} val={getVal(task.estimated_effort)} />
            <TaskItem name={'actual_effort:'} val={getVal(task.actual_effort)} />
            <TaskItem name={'physical_progress:'} val={getVal(task.physical_progress)} />
            <TaskItem name={'tags:'} val={getVal(task.tags)} />
            <TaskItem name={'creation_date:'} val={dateFormat(task.creation_date)} />
            <TaskItem name={'start_date:'} val={dateFormat(task.start_date)} />
            <TaskItem name={'due_date:'} val={dateFormat(task.due_date)} />
        </div>;
    }
};

export default ShowInfo;