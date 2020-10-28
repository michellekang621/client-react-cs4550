import TopicService from "../services/TopicService"

export const DELETE_TOPIC = "DELETE_TOPIC"
export const CREATE_TOPIC = "CREATE_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"

export const deleteTopic = (dispatch, topic) =>
    TopicService.deleteTopic(topic._id)
        .then(dispatch ({
        type: DELETE_TOPIC,
        topic: topic
    }))

export const createTopic = (dispatch, lessonId, topic) =>
    TopicService.createTopicForLesson(lessonId, topic)
        .then(dispatch ({
        type: CREATE_TOPIC,
        topic: topic
    }))

export const updateTopic = (dispatch, topic) =>
    TopicService.updateTopic(topic._id, topic)
        .then(dispatch ({
        type: UPDATE_TOPIC,
        topic: topic
    }))

