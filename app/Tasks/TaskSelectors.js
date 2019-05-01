export function getTasksActive(state) {
    return state.tasks.data.filter((task) => task.obj_status === 'active');
}

export function getTaskById(state, id) {
    return state.tasks.data.find((task) => +task.id === +id) || {};
}