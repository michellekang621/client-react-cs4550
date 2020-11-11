const widgetReducer = (state ={}, action) => {
    switch(action.type) {
        case "CREATE_WIDGET_FOR_TOPIC":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets,
                // TODO: WHY is this necessary here too?
                topicId: action.topicId
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId
            }
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(widget => widget.id === action.widget.id? action.widget : widget)
            }
        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            }
        case "FIND_WIDGET":
            return {
                ...state,
                widget: action.widget
            }
        case "MOVE_WIDGET_UP":
            return {
                ...state,
                widget: action.widget,
                widgets: action.widgets,
                topic: action.topicId
            }
        case "MOVE_WIDGET_DOWN":
            return {
                ...state,
                widget: action.widget,
                widgets: action.widgets,
                topic: action.topicId
            }
        default:
            return state
    }
}


export default widgetReducer;