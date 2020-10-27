import React from "react";
import {connect} from "react-redux";
import {
    createTopic,
    deleteTopic,
    updateTopic
} from "../actions/topicsActions";
import {Link} from "react-router-dom";

const TopicPillsComponent = ({lessonId, topics = [], createTopic, deleteTopic, updateTopic}) =>
    <div>
        <ul>
            <li>
                <Link to={`/edit/5f8ef65caf042400176ce65a/modules/5f8f3219af042400176cebfc/topics/topic123`}>
                    Topic 123
                </Link>
            </li>
            <li>
                <Link to={`/edit/5f8ef65caf042400176ce65a/modules/5f8f3219af042400176cebfc/topics/topic234`}>
                    Topic 234
                </Link>
            </li>
        </ul>
        {/*<span>*/}
        {/*    {*/}
        {/*        topics.map (topic =>*/}
        {/*            <span key={topic._id}>*/}
        {/*                <Link to={`/edit/${lessonId}/topics/${topic._id}`}>*/}
        {/*                {*/}
        {/*                    !topic.editing &&*/}
        {/*                        <span>*/}
        {/*                            <label>{topic.title}</label>*/}
        {/*                            <button onClick={() => updateTopic({...topic, editing:true})}>*/}
        {/*                                Edit*/}
        {/*                            </button>*/}
        {/*                        </span>*/}
        {/*                }*/}
        {/*                {*/}
        {/*                    topic.editing &&*/}
        {/*                        <span>*/}
        {/*                            <input onChange={(event) =>*/}
        {/*                                updateTopic({...topic, title: event.target.value})}*/}
        {/*                                value={topic.title}/>*/}
        {/*                            <button onClick={() => deleteTopic(topic)}>*/}
        {/*                                Delete*/}
        {/*                            </button>*/}
        {/*                            <button onClick={() => updateTopic({...topic, editing:false})}>*/}
        {/*                                Ok*/}
        {/*                            </button>*/}
        {/*                        </span>*/}
        {/*                }*/}
        {/*                </Link>*/}
        {/*            </span>*/}
        {/*        )*/}
        {/*    }*/}
        {/*    <button onClick={() => createTopic(lessonId, {title: "New Topic"})}>*/}
        {/*        Create Topic*/}
        {/*    </button>*/}
        {/*</span>*/}
    </div>

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics,
    lesson: state.lessonReducer.lesson
})

const propertyToDispatchMapper = (dispatch) => ({
    createTopic: (lessonId, topic) => createTopic(dispatch, lessonId, topic),
    deleteTopic: (topic) => deleteTopic(dispatch, topic),
    updateTopic: (topic) => updateTopic(dispatch, topic)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(TopicPillsComponent)