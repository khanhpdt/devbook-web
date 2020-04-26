import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas"

const appMiddlewares = []

const sagaMiddleware = createSagaMiddleware()
appMiddlewares.push(sagaMiddleware)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...appMiddlewares)))

sagaMiddleware.run(rootSaga)

export default store
