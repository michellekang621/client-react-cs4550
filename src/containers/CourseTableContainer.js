import React from "react";
import "../styling/CourseTable.style.client.css";
import CourseService from "../services/CourseService";
import {CourseRowComponent} from "../components/CourseRowComponent";
import {createCourse, deleteCourse} from "../services/CourseService";
import {Link} from "react-router-dom";

export class CourseTableContainer extends React.Component {

    state = {
        courses: this.props.courses,
        course: {
            title: "",
            owner: "me",
            lastUpdated: "today"
        }
    }

    componentDidMount() {
        CourseService.findAllCourses()
            .then(courses => this.setState({
                courses: courses
            }))
    }

    createTitle = (event) => {
        const courseTitle = event.target.value
        const newCourse = {
            title: courseTitle,
            owner: "me",
            lastUpdated: "today"
        }
        this.setState({
            course: newCourse
        })
    }

    createCourse = () => {
        createCourse(this.state.course)
            .then(actualCourse => this.setState(function (prevState) {
                return {
                    courses: [
                        ...prevState.courses, actualCourse
                    ]
                }
            }))
            .catch(error => {})
        console.log(this.props.courses)
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
            <div className="container element-color">
            <form>
                <h1 className="wbdv-sticky-h1 form-row">
                    <div className="col-md-auto">
                        <i className="fa fa-bars"/>
                    </div>
                    <div className="col-md-auto float-left pad-top" style={{fontSize:25}}>
                        <label htmlFor="courseManager">Course Manager</label>
                    </div>
                    <div className="col form-group pad-top">

                        <input id="courseManager"
                               placeholder="New Course Title"
                               type="text"
                               className="form-control"
                               onChange={this.createTitle}/>

                    </div>
                    <div className="col-md-auto float-right pad-top">
                        <i className="fa fa-plus" onClick={this.createCourse}/>
                    </div>
                </h1>
            </form>
            <table className="table element-color">
                <thead>
                <tr>
                    <th className="wbdv-header wbdv-title">Title</th>
                    <th className="wbdv-header wbdv-owner">Owned By</th>
                    <th className="wbdv-header wbdv-last-modified">Last Modified</th>
                    <th>
                        <i className="fa fa-sort float-right pad-element"/>
                        <Link to="/course/grid">
                            <i className="fa fa-th-large float-right pad-element"/>
                        </Link>
                        <Link to="/course/table">
                            <i className="fa fa-list float-right pad-element"/>
                        </Link>

                    </th>
                </tr>
                </thead>
                <tbody>
                { this.state.courses.map((course) =>
                    <CourseRowComponent
                        course={course}
                        key={course._id}
                        deleteCourse={this.deleteCourse}/>
                )}
                </tbody>
            </table>
            </div>
        )
    }
}