import React from "react";
import courseService from "../services/CourseService";
import moduleService from "../services/ModuleService";
import lessonService from "../services/LessonService"
import topicService from "../services/TopicService";
import widgetService from "../services/WidgetService";
import {findWidgetsForTopic} from "../services/WidgetService";
import LessonTabsComponent from "../components/LessonTabsComponent";
import ModuleListComponent from "../components/ModuleListComponent";
import TopicPillsComponent from "../components/TopicPillsComponent";
import {connect} from "react-redux";
import WidgetListComponent from "../components/WidgetListComponent";

export class CourseEditorContainer extends React.Component{

    componentDidMount() {
        console.log("COMPONENT DID MOUNT")
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId
        console.log("courseID: " + courseId)
        console.log("moduleID: " + moduleId)
        console.log("lessonID: " + lessonId)
        console.log("topicID: " + topicId)
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if(moduleId) {
            this.props.findLessonsForModule(moduleId)
        }
        if (lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
        if (topicId) {
            this.props.findWidgetsForTopic(topicId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("COMPONENT DID UPDATE")
        const moduleId = this.props.match.params.moduleId
        const previousModuleId = prevProps.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const previousLessonId = prevProps.match.params.lessonId
        const topicId = prevProps.match.params.topicId
        const previousTopicId = this.props.match.params.topicId

        console.log("updated moduleID: " + moduleId)
        console.log("updated lessonID: " + lessonId)
        console.log("updated topicID: " + topicId)

        if(moduleId !== previousModuleId) {
            console.log("finding lessons for module meaning module id has changed")
            this.props.findLessonsForModule(moduleId)
        }

        if (lessonId !== previousLessonId) {
            this.props.findTopicsForLesson(lessonId)
        }

        if (topicId !== previousTopicId) {
            this.props.findWidgetsForTopic(topicId)
        }

    }

    render() {
        return(
            <div className="element-color">
                <h1>CourseEditor</h1>
                <div className="row">
                    <div className="col-4">
                        <ModuleListComponent/>
                    </div>
                    <div className="col-8">
                        <LessonTabsComponent/>
                        <TopicPillsComponent/>
                        <WidgetListComponent/>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToProperty = (state) => ({
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({

    findCourseById: (courseId) => courseService.findCourseById(courseId)
        .then(actualCourse => dispatch({
            type: "FIND_COURSE_BY_ID",
            course: actualCourse
        })),
    findModulesForCourse: courseId => moduleService.findModulesForCourse(courseId)
        .then(actualModules => dispatch({
            type: "FIND_MODULES_FOR_COURSE",
            modules: actualModules
        })),
    findLessonsForModule: moduleId => lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: "FIND_LESSONS_FOR_MODULE",
            lessons: lessons,
            moduleId: moduleId
        })),
    findTopicsForLesson: lessonId => topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: "FIND_TOPICS_FOR_LESSON",
            topics: topics,
            lessonId: lessonId
        })),
    findWidgetsForTopic: (topicId) => widgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
            type:"FIND_WIDGETS_FOR_TOPIC",
            widgets: widgets,
            topicId: topicId
        }))
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(CourseEditorContainer)