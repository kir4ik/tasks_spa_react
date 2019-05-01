import React from 'react';
// format output data
import { dateFormat } from '../../../utils/formatData';

export default ({ name, val, isDate }) => {
    if (isDate) val = dateFormat(val);
    if (typeof val === "boolean") val = val.toString();

    return <div className="task-info__item">
        <span className="task-info__item-name">{name}</span>
        <span className="task-info__item-val">{val}</span>
    </div>;
};
