import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// Reducers
import { loginReducer } from "../reducers/loginReducer";
import { tasksReducer } from "../reducers/tasksReducer";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  login: loginReducer,
  tasks: tasksReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
