import React from 'react';
// components
import TaskTableRow from './TaskTableRow';

export default ({ tasks, tableAgreement }) => {
    return <table className="table">
        <thead>
            <tr>
                {tableAgreement.map((head) => {
                    return <th className="table__ceil" key={head.propName}>{head.title}</th>
                })}
            </tr>
        </thead>
        <tbody>
            {tasks.map((task) => {
                return <TaskTableRow task={task} tableAgreement={tableAgreement} key={task.id} />
            })}
        </tbody>
    </table>;
}
