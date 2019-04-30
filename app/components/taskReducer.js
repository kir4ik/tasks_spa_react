import { UPDATE_TASK, GET_TASKS_ALL } from './taskActions';

const initialState = { data: [] };

export default function (state = initialState, action) {
    switch(action.type) {
        case UPDATE_TASK: return {
            data: state.data.map((task) => {
                if (task.id === action.task.id) task = action.task;
                return task;
            })
        };

        case GET_TASKS_ALL: return {
            data: action.tasks
        };

        default: return state;
    }
}

export const getTasks = (state) => state.tasks.data;
export const getTasksActive = (state) => state.tasks.data.filter((task) => task.obj_status === 'active');