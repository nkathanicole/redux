import { createStore } from 'redux';

const initialState = {
  tasks: [],
};

const ADD_TASK = 'ADD_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const EDIT_TASK = 'EDIT_TASK';

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        ),
      };
    default:
      return state;
  }
};

const store = createStore(taskReducer);

export default store;