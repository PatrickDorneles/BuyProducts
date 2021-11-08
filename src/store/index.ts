
import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import { reducers } from "./reducers"
import createSagaMiddleware from 'redux-saga'
import { root as rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export const storeWrapper = createWrapper(() => store, { debug: false })