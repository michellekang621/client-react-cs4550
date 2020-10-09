import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {CourseTableContainer} from "./CourseTableContainer";
import {CourseGridContainer} from "./CourseGridContainer";

export class CourseManagerContainer extends React.Component {

    state = {
        courses: []
    }

    render() {
        return(
            <Router>
                <div>
                    <Link to="/course/table">Table</Link>
                    <Link to="/course/grid">Grid</Link>
                    <Route path="/course/table"
                           render={() => <CourseTableContainer courses={this.state.courses}/>}/>
                    <Route path="/course/grid"
                           render={() => <CourseGridContainer courses={this.state.courses}/>}/>
                </div>
            </Router>
        )
    }
}

