// Export Constants
export const UPDATE_TASK = 'UPDATE_TASK';

export function updateTask(task) {
    return {
        type: UPDATE_TASK,
        task
    };
}

export function requestUpdateTask(task) {
    const body = JSON.stringify(task);

    return (dispatch) => fetch('api/tasks', { method: 'put', body })
        .then(res => {
            console.log(res);
            return dispatch(updateTask(task));
        })
        .catch(err => {
            console.warn(err);
            return dispatch(updateTask(task));
        });
}
