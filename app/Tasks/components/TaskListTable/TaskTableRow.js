import React from 'react';
import { Link } from 'react-router-dom';
// format output data
import { getVal, dateFormat } from '../../../utils/formatData';

export default ({ task, tableAgreement }) => {
    if (task == null || typeof task !== "object") return null;
    
    const defVal = String.fromCharCode('8212'); // mdash
    let className = 'table__ceil';
    if (task.is_high_priority) className += ' high-priority';

    return <tr>
        {tableAgreement.map((agreement) => {
            let data = task[agreement.propName];
            if (Array.isArray(data)) data = data.join(', '); // tags

            if (agreement.isDate) data = dateFormat(data, defVal);
            else data = getVal(data, defVal);

            if (agreement.isLink) {
                data = <Link className="table__ceil--link" to={`/${task.id}`}>{data}</Link>;
            }

            return <td className={className} key={agreement.propName}>{data}</td>
        })}
    </tr>;
}