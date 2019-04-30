import React from 'react';
import { Link } from 'react-router-dom';
// format output data
import { getVal, dateFormat } from '../../utils/formatData';

export default ({ task }) => {
    const warning = task.is_high_priority ? 'high-priority' : '';
    const tags = !Array.isArray(task.tags)
                ? task.tags
                : task.tags.join(', ');

    const defVal = String.fromCharCode('8212'); // mdash

    return <tr>
        <td className={"table__ceil " + warning}>
            <Link to={`${task.id}`} className={"table__ceil--link"}>{getVal(task.name, defVal)}</Link>
        </td>
        <td className={"table__ceil " + warning}>{getVal(tags, defVal)}</td>
        <td className={"table__ceil " + warning}>{getVal(task.actual_effort, defVal)}</td>
        <td className={"table__ceil " + warning}>{getVal(task.estimated_effort, defVal)}</td>
        <td className={"table__ceil " + warning}>{dateFormat(task.due_date, defVal)}</td>
    </tr>;
};
