import React from "react";
import "../styling/styles.css";
import "../styling/CourseManager.style.client.css";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CourseService from "../services/CourseService";
import {CourseTableContainer} from "./CourseTableContainer";
import {CourseGridContainer} from "./CourseGridContainer";
import CourseEditorContainer from "./CourseEditorContainer";

export class CourseManagerContainer extends React.Component {

    render() {
        return(
            <Router>
                <div>
                    <Route path="/course/table"
                           render={() => <CourseTableContainer/>}/>
                    <Route path="/course/grid"
                           render={() => <CourseGridContainer/>}/>
                    <Route path={[
                        "/edit/:courseId",
                        "/edit/:courseId/modules/:moduleId",
                        "/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                        "/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
                    ]}
                           exact component={CourseEditorContainer}/>}/>
                    <Link to="/course/table" className="bottom-right">Table</Link>
                    <Link to="/course/grid" className="bottom-right">Grid</Link>
                </div>
            </Router>
        )
    }
}