const INITIAL_STATE = { step: 1, number: 0 };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INC":
      return { ...state, number: state.number + state.step }; // numero atual mais o step atual
    case "DEC":
      return { ...state, number: state.number - state.step }; // numero atual menos o step atual
    case "STEP_CHANGED":
      return { ...state, step: +action.payload }; // atualiza o step mantendo alguns dados do ultimo estado
    default:
      return state;
  }
}
