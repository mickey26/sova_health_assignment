const INITIAL_STATE = {
  darkMode: true,
  dataDropdown: [],
  dataResult: [],
  detail: [],
  tempVar: "",
  isLoading: true,
};
export default function landingReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "temp":
      return {
        ...state,
        darkMode: !action.payload,
      };
    case "search":
      return {
        ...state,
        dataDropdown: action.payload,
        tempVar: action.temp,
        isLoading: false,
      };
    case "result":
      return {
        ...state,
        dataResult: action.payload,
        tempVar: action.temp,
        isLoading: false,
      };
    case "detail":
      return {
        ...state,
        detail: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
