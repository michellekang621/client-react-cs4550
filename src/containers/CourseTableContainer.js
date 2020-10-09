import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "font-awesome/css/font-awesome.css"
import {CourseRowComponent} from "../components/CourseRowComponent";
import {createCourse, deleteCourse} from "../services/CourseService";

export class CourseTableContainer extends React.Component {

    createCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastUpdated: "today"
        }

        createCourse(newCourse)
            .then(actualCourse => this.setState(function (prevState) {
                return {
                    courses: [
                        ...prevState.courses, actualCourse
                    ]
                }
            }))
            .catch(error => {})
    }

    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => this.setState(prevState => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                })
                )
            )
    }

    render() {
        return(
            <div className="container">
            <form>
                <h1 className="wbdv-sticky-h1 form-row">
                    <div className="col">
                        <a href="#">
                            <i className="fas fa-bars wbdv-color-white wbdv-field wbdv-hamburger"
                               style="margin-left:30px; margin-top:20px; font-size:30px"></i>
                        </a>
                    </div>
                    <div className="col wbdv-label wbdv-course-manager">
                        <label htmlFor="courseManager"
                               style="position:left; font-size:20px">Course Manager</label>
                    </div>
                    <div className="form-group col-8 wbdv-field wbdv-new-course">

                        <input id="courseManager" placeholder="New Course Title" type="text"
                               className="form-control wbdv-nudge-15px-down"/>

                    </div>
                    <a href="#">
                        <i className="fas fa-plus col wbdv-color-white wbdv-button wbdv-add-course">
                            style="position:relative; margin-right:30px; font-size:30px; top: 7px"></i>
                    </a>
                    <a href="#">
                        <i className="wbdv-stuck-bottom-right wbdv-color-white fas fa-plus"
                           style="font-size:30px"></i>
                    </a>
                </h1>
            </form>
            <table className="table">
                <thead>
                <tr>
                    <th className="wbdv-header wbdv-title" style="width:50%">Title</th>
                    <th className="wbdv-header wbdv-owner">Owned By</th>
                    <th className="wbdv-header wbdv-last-modified">Last Modified</th>
                    <th>
                        <a href="#" className="wbdv-header wbdv-sort">
                            <i className="fas fa-sort float-right"></i>
                        </a>
                        <a href="#" className="wbdv-button wbdv-grid-layout">
                            <i className="fas fa-th-large float-right" style="margin-right:65px"></i>
                        </a>
                        <a href="#" className="wbdv-button wbdv-list-layout">
                            <i className="fas fa-list float-right" style="margin-right:15px"></i>
                        </a>
                    </th>
                </tr>
                </thead>
                <tbody>
                { this.props.courses.map((course, key) =>
                    <CourseRowComponent
                        course={course}
                        key={key}/>
                )}
                </tbody>
            </table>
            </div>
        )
    }
}
