const topicsUrl = "http://localhost:8080/api/topics"
const widgetsUrl = "http://localhost:8080/api/widgets"

export const createWidgetForTopic = (topicId, widget) =>
    fetch(`${topicsUrl}/${topicId}/widgets`,{
            method: "POST",
            // TODO: why do we have to add topicID?
            body: JSON.stringify({
                ...widget,
                topicId
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${topicsUrl}/${topicId}/widgets`)
        .then(response => response.json())

export const findAllWidgets = () =>
    fetch(widgetsUrl)
        .then(response => response.json())

export const findWidgetById = (widgetId) =>
    fetch(`${widgetsUrl}/${widgetId}`)
        .then(response => response.json())

export const updateWidget = (widgetId, widget) =>
    fetch(`${widgetsUrl}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${widgetsUrl}/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export default {
    createWidgetForTopic,
    findWidgetsForTopic,
    findAllWidgets,
    findWidgetById,
    updateWidget,
    deleteWidget
}