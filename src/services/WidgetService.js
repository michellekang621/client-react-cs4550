const topicsUrl = "http://localhost:8080/api/topics"
const widgetsUrl = "http://localhost:8080/api/widgets"

export const createWidgetForTopic = (topicId, widget) => {
    console.log("CREATE WIDGET FOR TOPIC SERVICES")
    return fetch(`${topicsUrl}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify({
            ...widget,
            topicId
        }),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
}

export const findWidgetsForTopic = (topicId) => {
    return fetch(`${topicsUrl}/${topicId}/widgets`)
        .then(response => response.json())
}

export const findAllWidgets = () => {
    return fetch(widgetsUrl)
        .then(response => response.json())
}

export const findWidgetById = (widgetId) => {
    return fetch(`${widgetsUrl}/${widgetId}`)
        .then(response => response.json())
}

export const updateWidget = (widgetId, widget) => {
    return fetch(`${widgetsUrl}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
}

export const deleteWidget = (widgetId) => {
    console.log("DELETING WIDGET SERVICES")
    console.log(widgetId)

    return fetch(`${widgetsUrl}/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())
}

export const moveWidgetUp = (widget, topicId) => {
    return fetch(`${topicsUrl}/${topicId}/widgets`, {
        method: "PUT",
        body: JSON.stringify({
            ...widget,
            topicId
        }),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
}

export const moveWidgetDown = (widget, topicId) => {
    return fetch(`${topicsUrl}/${topicId}/widgets`, {
        method: "PUT",
        body: JSON.stringify({
            ...widget,
            topicId
        }),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
}

export default {
    createWidgetForTopic,
    findWidgetsForTopic,
    findAllWidgets,
    findWidgetById,
    updateWidget,
    deleteWidget,
    moveWidgetUp,
    moveWidgetDown
}