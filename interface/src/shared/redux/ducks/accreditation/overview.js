// ACTION TYPES
const UPDATE_TASKS = 'UPDATE_TASKS';
const UPDATE_SOLICITATIONS = 'UPDATE_SOLICITATIONS';
const RESET_SOLICITATIONS = 'RESET_SOLICITATIONS';
const RESET_TASKS = 'RESET_TASKS';

const initialState = {
  tasks: [],
  solicitations: [],
};

// Reducer
export default function overviewReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SOLICITATIONS:
      return {
        ...state,
        solicitations: action.payload,
      };
    case UPDATE_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case RESET_SOLICITATIONS:
      return {
        ...state,
        solicitations: {},
      };
    case RESET_TASKS:
      return {
        ...state,
        tasks: {},
      };

    default:
      return state;
  }
}

// Action Creators
export const udpateSolicitations = (payload) => ({
  type: UPDATE_SOLICITATIONS,
  payload,
});
export const resetSolicitations = (payload) => ({
  type: RESET_SOLICITATIONS,
  payload,
});
export const udpateTasks = (payload) => ({
  type: UPDATE_TASKS,
  payload,
});
export const resetTasks = (payload) => ({
  type: RESET_TASKS,
  payload,
});
