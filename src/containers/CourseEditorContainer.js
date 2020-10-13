import React from "react";
import {findCourseById} from "../services/CourseService";
import {ModuleListContainer} from "./ModuleListContainer";
import {LessonTabsContainer} from "./LessonTabsContainer";
import {TopicPillsContainer} from "./TopicPillsContainer";

export class CourseEditorContainer extends React.Component{

    state = {
        courses: [],
        course: {
            title: "",
            owner: "me",
            lastUpdated: "today",
        },
        selectedModule: "",
        selectedLesson: "",
        selectedTopic: "",
        lessons: [
            {
                title: "Lesson 1"
            },
            {
                title: "Lesson 2"
            },
            {
                title: "Lesson 3"
            }
        ],
        modules: [],
        topics: [
            {
                title: "Topic 1"
            },
            {
                title: "Topic 2"
            }
        ]
    }

    // componentDidMount() {
    //     const courseId = this.props.match.params.id
    //     console.log(courseId)
    //     findCourseById(courseId)
    //         .then(actualCourse => this.setState({
    //             course: actualCourse
    //         }))
    //     console.log(this.state.course)
    // }

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         selectedModule:
    //             this.props.course.modules[0],
    //         selectedLesson:
    //             this.props.course.modules[0].lessons[0]
    //     }
    // }
    //
    selectModule = (module) =>
        this.setState({selectedModule: module,
            selectedLesson: module.lessons[0],
            selectedTopic: module.lessons[0].topics[0]})

    selectLesson = (lesson) =>
        this.setState({
            selectedLesson: lesson,
            selectedTopic: lesson.topics[0]})

    render() {
        return(
            <div className="element-color">
                <h1>CourseEditor</h1>
                <h2>{this.props.course.title} {this.props.course._id}</h2>
                <div className="row">
                    <div className="col">
                        <ModuleListContainer
                            selectedModule={this.state.selectedModule}
                            selectModule={this.selectModule}
                            modules={this.state.modules}/>
                    </div>
                    <div className="col-8">
                        <LessonTabsContainer
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            lessons= {this.state.lessons}/>
                        <TopicPillsContainer topics={this.state.topics}/>
                    </div>
                </div>
            </div>
        )
    }
}