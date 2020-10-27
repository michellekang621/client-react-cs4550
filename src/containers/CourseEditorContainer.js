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
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const topicId = this.props.match.params.topicId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if(moduleId) {
            this.props.findLessonsForModule(moduleId)
        }

        if (topicId) {
            this.props.findWidgetsForTopic(topicId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId = this.props.match.params.moduleId
        const previousModuleId = prevProps.match.params.moduleId
        const topicId = prevProps.match.params.topicId
        const previousTopicId = this.props.match.params.topicId

        if(moduleId !== previousModuleId) {
            this.props.findLessonsForModule(moduleId)
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
    findLessonsForModule: moduleId => lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: "FIND_LESSONS_FOR_MODULE",
            lessons,
            moduleId
        })),
    findModulesForCourse: courseId => moduleService.findModulesForCourse(courseId)
        .then(actualModules => dispatch({
            type: "FIND_MODULES_FOR_COURSE",
            modules: actualModules
        })),
    findCourseById: (courseId) => courseService.findCourseById(courseId)
        .then(actualCourse => dispatch({
            type: "FIND_COURSE_BY_ID",
            course: actualCourse
        })),
    findWidgetsForTopic: (topicId) => findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
            type:"FIND_WIDGETS_FOR_TOPIC",
            widgets: widgets,
            topicId
        }))
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(CourseEditorContainer)