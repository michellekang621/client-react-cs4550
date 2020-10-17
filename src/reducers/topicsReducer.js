import {
    DELETE_TOPIC,
    CREATE_TOPIC,
    EDIT_TOPIC
} from "../actions/topicsActions";

const initialState = {
    topics: [
        {
            _id: 123,
            title: "Topic 1",
            editing: false
        },
        {
            _id: 234,
            title: "Topic 2",
            editing: true
        },
        {
            _id: 345,
            title: "Topic 3",
            editing: false
        }
    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic._id ==! action.topic._id)
            }
        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    {
                        _id: Date.now() + "",
                        title: "New Topic"
                    }
                ]
            }
        case EDIT_TOPIC:
            return {
                topics: state.topics.map(topic => topic._id === action.topic._id? action.topic : topic)
            }
        default:
            return state
    }
}

export default topicReducer