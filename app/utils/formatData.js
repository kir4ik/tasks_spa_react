export function getVal(val, defVal = '') {
    return val || val === 0 ? val : defVal;
};

export function dateFormat(date, defVal = '') {
    if (date == null) return defVal;
    const str = new Date(date).toLocaleString();

    return str === "Invalid Date" ? defVal : str;
};