import React from "react";
import {connect} from "react-redux";
import {
    createTopic,
    deleteTopic,
    updateTopic
} from "../actions/topicsActions";
import {Link} from "react-router-dom";

const TopicPillsComponent = ({course, moduleId, lessonId, topics = [], createTopic, deleteTopic, updateTopic}) =>
    <div>
        <ul>
            <li>
                <Link to={`/edit/5f8e46ca7c74f50017f7d47e/modules/5f989ad03f5a280017e19fcc/lessons/5f98c8726c80d00017aeddb9/topics/topic123`}>
                    Topic 123
                </Link>
            </li>
            <li>
                <Link to={`/edit/5f8e46ca7c74f50017f7d47e/modules/5f989ad03f5a280017e19fcc/lessons/5f98c8726c80d00017aeddb9/topics/topic234`}>
                    Topic 234
                </Link>
            </li>
        </ul>
        <ul className="nav nav-pills">
            {
                topics.map (topic =>
                    <li key={topic._id} className="nav-item">
                        <Link to={`/edit/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}>
                        {
                            !topic.editing &&
                                <span>
                                    <label>{topic.title}</label>
                                    <i onClick={() => updateTopic({...topic, editing:true})}
                                       className="fa fa-edit float-right pad-element element-color"/>
                                </span>
                        }
                        {
                            topic.editing &&
                                <span>
                                    <input onChange={(event) =>
                                        updateTopic({...topic, title: event.target.value})}
                                        value={topic.title}/>
                                    <i onClick={() => updateTopic({...topic, editing:false})}
                                       className="fa fa-check-square float-right pad-element element-color"/>
                                    <i onClick={() => deleteTopic(topic)}
                                       className="fa fa-trash float-right pad-element element-color"/>
                                </span>
                        }
                        </Link>
                    </li>
                )
            }
            <i onClick={() => createTopic(lessonId, {title: "New Topic"})} className="fa fa-plus-square"/>
        </ul>
    </div>

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics,
    lessonId: state.topicReducer.lessonId,
    moduleId: state.lessonReducer.moduleId,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    createTopic: (lessonId, topic) => createTopic(dispatch, lessonId, topic),
    deleteTopic: (topic) => deleteTopic(dispatch, topic),
    updateTopic: (topic) => updateTopic(dispatch, topic)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(TopicPillsComponent)