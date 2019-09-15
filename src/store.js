import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers"
import Thunk from "redux-thunk"
import { fromJS } from "immutable"
import logger from "redux-logger"

const blackList = []

const loadStorage = () => {
  try {
    const serializedData = sessionStorage.getItem("session")
    if (serializedData === null) {
      return undefined
    }
    return fromJS(JSON.parse(serializedData))
  } catch (error) {
    return undefined
  }
};
const saveStorage = state => {
  try {
    let serializedData = state.toJS()
    Object.keys(serializedData).forEach(key => {
      if (blackList.includes(key)) {
        delete serializedData[key]
      }
    })
    serializedData = JSON.stringify(serializedData);
    sessionStorage.setItem("session", serializedData);
  } catch (error) {
    return
  }
}

const middlewares = [Thunk]

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger)
}

const initialState = loadStorage()

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middlewares)
    // /** remove this line to compile */ window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

saveStorage(store.getState())

store.subscribe(() => {
  saveStorage(store.getState())
})

export default store