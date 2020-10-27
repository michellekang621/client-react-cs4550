import React from "react";
import {connect} from "react-redux";
import widgetService from "../services/WidgetService"
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";

const WidgetListComponent = (
    {
        widgets = [],
        topicId,
        createWidgetForTopic
    }
) =>
    <div>
        <h3>Widgets</h3>
        <ul>
            {
                widgets.map(widget =>
                    <li key={widget.id}>
                        {
                            widget.type === "HEADING" &&
                                <HeadingWidgetComponent widget={widget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                                <ParagraphWidgetComponent widget={widget}/>
                        }
                    </li>
                )
            }
        </ul>
        <button onClick={() => createWidgetForTopic(topicId)}>
            Create
        </button>
    </div>

const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets,
    topicId: state.widgetReducer.topicId
})

const dispatchMapper = (dispatch) => ({
    createWidgetForTopic: (topicId) =>
        widgetService.createWidgetForTopic(topicId, {
            name: "NEW WIDGET",
            type: "PARAGRAPH"
        }).then(widget => dispatch({
            type: "CREATE_WIDGET_FOR_TOPIC",
            widget
        }))

})
export default connect
(stateToPropertyMapper, dispatchMapper)
(WidgetListComponent);