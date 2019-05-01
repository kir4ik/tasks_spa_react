import React from 'react';
// components
import TaskTitle from './TaskTitle';
import TaskColumn from './TaskColumn';

export default class extends React.Component {
    updateTitle = (title) => {
        if (title === this.props.task.name) return false; // nothing change

        const task = {...this.props.task, name: title};
        this.props.updateTask(task);
    }

    render() {
        const task = this.props.task;
        
        if (task == null || typeof task !== "object") return null;

        return <div className="task-info">
            <TaskTitle title={task.name} update={this.updateTitle} isEdit={false} />
            <TaskColumn name={'description'} val={task.description} />
            <TaskColumn name={'physical progress'} val={task.physical_progress} />
            <TaskColumn name={'is completed'} val={task.is_completed} />
            <TaskColumn name={'estimated effort'} val={task.estimated_effort} />
            <TaskColumn name={'actual effort'} val={task.actual_effort} />
            <TaskColumn name={'creation date'} val={task.creation_date} isDate={true} />
            <TaskColumn name={'due date'} val={task.due_date} isDate={true} />
            <TaskColumn name={'start date'} val={task.start_date} isDate={true} />
        </div>;
    }
};
