// Export Constants
export const UPDATE_TASK = 'UPDATE_TASK';
export const GET_TASKS_ALL = 'GET_TASKS_ALL';

export function updateTask(task) {
    return {
        type: UPDATE_TASK,
        task
    };
}

export function requestUpdateTask(data) {
    const form = new FormData();
    for (const name in data) {
        form.append(name, data[name]);
    }

    return (dispatch) => fetch('google.com', {method: 'post', form})
        .then(res => {
            console.log(res);
            return dispatch(updateTask(data))
        })
        .catch(err => {
            console.warn(err);
            return dispatch(updateTask(data))
        });
}

export function getTasksAll() {
    return {
        type: GET_TASKS_ALL,
        tasks: require('../data/tasks.json')
    };
}
