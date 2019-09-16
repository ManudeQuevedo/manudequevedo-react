import { fromJS } from "immutable";

const initState = fromJS({
  value: "en"
});

export default (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE-LANG":
      return state.merge({
        value: state.get("value") === "en" ? "en" : "es"
      })
    default:
      return state
  }
}