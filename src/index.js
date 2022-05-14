import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from 'react-router-dom';

const initialState = {
    users: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_USERS":
            return {
                ...state,
                users: state.users.concat(action.payload),
            };
        default:
            return state;
    }
};
export default reducer;

const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
