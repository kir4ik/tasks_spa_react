import React from 'react';

export default ({ name, val }) => {
    if (val == null || Array.isArray(val) && val.length < 1) return null;

    return <div className="task-info__item">
        <span className="task-info__item-name">{name}</span>
        <span className="task-info__item-val">{val}</span>
    </div>;
};
