import React from "react";
import {CourseCardComponent} from "../components/CourseCardComponent";

export class CourseGridContainer extends React.Component {
    render() {
        return(
            <div className="card-deck">
                {  courses.map((course, key) =>
                    <CourseCardComponent course={course}
                                key={key}/>)}
            </div>
        )
    }
}

