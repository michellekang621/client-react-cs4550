import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import {CourseManagerContainer} from "./containers/CourseManagerContainer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "./reducers/modulesReducer";
import lessonReducer from "./reducers/lessonsReducer";
import topicReducer from "./reducers/topicsReducer";

const rootReducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <CourseManagerContainer/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
