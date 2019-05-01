import { UPDATE_TASK } from './TaskActions';

const initialState = { data: require('../data/tasks.json') };

export default function (state = initialState, action) {
    switch(action.type) {
        case UPDATE_TASK: return {
            data: state.data.map((task) => {
                if (task.id === action.task.id) return action.task;
                return task;
            })
        };

        default: return state;
    }
}
