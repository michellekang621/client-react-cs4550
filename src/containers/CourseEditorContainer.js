import React from "react";
import {findCourseById} from "../services/CourseService";
import {ModuleListContainer} from "./ModuleListContainer";
import {LessonTabsContainer} from "./LessonTabsContainer";
import {TopicPillsContainer} from "./TopicPillsContainer";

export class CourseEditorContainer extends React.Component{

    state = {
        course: {
            title: "",
            _id: ""
        }
    }

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        console.log(courseId)
        findCourseById(courseId)
            .then(actualCourse => this.setState({
                course: actualCourse
            }))
    }

    constructor(props) {
        super(props)
        this.state = {selectedModule:
                this.props.course.modules[0],
            selectedLesson:
                this.props.course.modules[0].lessons[0]
        }}



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
            <div>
                <h1>CourseEditor</h1>
                <h2>{this.state.course.title} {this.state.course._id}</h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleListContainer
                            selectedModule={this.state.selectedModule}
                            selectModule={this.selectModule}
                            modules={this.props.course.modules}/>
                    </div>
                    <div className="col-8">
                        <LessonTabsContainer
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            lessons= {this.state.selectedModule.lessons}/>
                        <TopicPillsContainer topics={this.props.course.topics}/>
                    </div>
                </div>
            </div>
        )
    }
}