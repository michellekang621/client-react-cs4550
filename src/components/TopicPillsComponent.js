import React from "react";
import {connect} from "react-redux";
import {
    createTopic,
    deleteTopic,
    editTopic
} from "../actions/topicsActions";

const TopicPillsComponent = ({topics = [], createTopic, deleteTopic, editTopic}) =>
    <div>
        <span>
            {
                topics.map (topic =>
                    <span>
                        {
                            !topic.editing &&
                                <span>
                                    <label>{topic.title}</label>
                                    <button onClick={() => editTopic({...topic, editing:true})}>
                                        Edit
                                    </button>
                                </span>
                        }
                        {
                            topic.editing &&
                                <span>
                                    <input onChange={(event) =>
                                        editTopic({...topic, title: event.target.value})}
                                        value={topic.title}/>
                                    <button onClick={() => deleteTopic(topic)}>
                                        Delete
                                    </button>
                                    <button onClick={() => editTopic({...topic, editing:false})}>
                                        Ok
                                    </button>
                                </span>
                        }
                    </span>
                )
            }
            <button onClick={createTopic}>
                Create Topic
            </button>
        </span>
    </div>

const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics
})

const propertyToDispatchMapper = (dispatch) => ({
    createTopic: () => createTopic(dispatch),
    deleteTopic: (topic) => deleteTopic(dispatch, topic),
    editTopic: (topic) => editTopic(dispatch, topic)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(TopicPillsComponent)