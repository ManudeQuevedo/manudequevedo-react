import { fromJS } from "immutable";

const initState = fromJS({
  value: "es"
});

export default (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE-LANG":
      return state.merge({
        value: state.get("value") === "en" ? "es" : "en"
      })
    default:
      return state
  }
}