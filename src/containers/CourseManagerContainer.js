import React from "react";
import "../styling/styles.css";
import "../styling/CourseManager.style.client.css";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CourseService from "../services/CourseService";
import {CourseTableContainer} from "./CourseTableContainer";
import {CourseGridContainer} from "./CourseGridContainer";
import {CourseEditorContainer} from "./CourseEditorContainer";

export class CourseManagerContainer extends React.Component {

    state = {
        courses: [],
        course: {
            title: "hello",
            owner: "me",
            lastUpdated: "today",
            modules: [
                {
                    title: "Module 1",
                    lessons: [
                        {
                            title: "Lesson 1"
                        },
                        {
                            title: "Lesson 2"
                        }
                    ]
                },
                {
                    title: "Module 2",
                    lessons: [
                        {
                            title: "Lesson 1"
                        },
                        {
                            title: "Lesson 2"
                        }
                    ]
                },
                {
                    title: "Module 3",
                    lessons: [
                        {
                            title: "Lesson 1"
                        }
                    ]
                }
            ]
        }
    }


    componentDidMount() {
        CourseService.findAllCourses()
            .then(courses => this.setState({
                courses: courses
            }))
    }

    createCourse = () => {
        console.log(this.state.course)
        CourseService.createCourse(this.state.course)
            .then(actualCourse => this.setState(function (prevState) {
                return {
                    courses: [
                        ...prevState.courses, actualCourse
                    ]
                }
            }))
            .catch(error => {})
        console.log(this.courses)
    }

    deleteCourse = (course) => {
        CourseService.deleteCourse(course._id)
            .then(status => this.setState(prevState => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                })
                )
            )
    }


    render() {
        return(
            <Router>
                <div>

                    <Route path="/course/table"
                           render={() => <CourseTableContainer courses={this.state.courses}/>}/>
                    <Route path="/course/grid"
                           render={() => <CourseGridContainer courses={this.state.courses}/>}/>
                    <Route path="/edit/:id"
                           render={() => <CourseEditorContainer
                               courses={this.state.courses}
                               course={this.state.course}
                               modules={this.state.course.modules}
                           />}/>
                    <Link to="/course/table" className="bottom-right">Table</Link>
                    <Link to="/course/grid" className="bottom-right">Grid</Link>
                </div>
            </Router>
        )
    }
}
