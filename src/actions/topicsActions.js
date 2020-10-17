export const DELETE_TOPIC = "DELETE_TOPIC"
export const CREATE_TOPIC = "CREATE_TOPIC"
export const EDIT_TOPIC = "EDIT_TOPIC"

export const deleteTopic = (dispatch, topic) =>
    dispatch ({
        type: DELETE_TOPIC,
        topic: topic
    })

export const createTopic = (dispatch) =>
    dispatch ({
        type: CREATE_TOPIC
    })

export const editTopic = (dispatch, topic) =>
    dispatch ({
        type: EDIT_TOPIC,
        topic: topic
    })

