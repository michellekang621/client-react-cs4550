import React from "react";
import {connect} from "react-redux";
import widgetService from "../services/WidgetService"
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";

const WidgetListComponent = (
    {
        widgets = [],
        topicId,
        createWidgetForTopic,
        deleteWidget,
        updateWidget,
        moveWidgetUp,
        moveWidgetDown
    }
) =>
    <div>
        <h3>Widgets</h3>
        <div className="pad-element">
            {
                widgets.map(widget =>
                    <div key={widget.id} className="card pad-element">
                        <div className={"col form-group"}>
                            <select className={"float-right col-md-auto"}
                                    onChange={(event) =>
                                        updateWidget({...widget, type: event.target.value})}>>
                                <option value={"HEADING"}>Heading</option>
                                <option value={"PARAGRAPH"}>Paragraph</option>
                            </select>
                            <i onClick={() => deleteWidget(widget)}
                               className={"fa fa-trash float-right col-md-auto element-color"}/>
                            <i className={"fa fa-arrow-up float-right col-md-auto"}
                               onClick={() => moveWidgetUp({...widget, movement: "up"})}/>
                            <i className={"fa fa-arrow-down float-right col-md-auto"}
                               onClick={() => moveWidgetDown({...widget, movement: "down"})}/>
                            {
                                widget.editing &&
                                <i onClick={() => updateWidget({...widget, editing: false})}
                                   className="fa fa-check-square float-right element-color"/>
                            }
                            {
                                !widget.editing &&
                                <i onClick={() => updateWidget({...widget, editing: true})}
                                   className="fa fa-edit float-right element-color"/>
                            }

                            <select className={"float-right col-md-auto"}
                                    onChange={(event) =>
                                        updateWidget({...widget, size: event.target.value})}>
                                <option value={1}>Size 1</option>
                                <option value={2}>Size 2</option>
                                <option value={3}>Size 3</option>
                                <option value={4}>Size 4</option>
                                <option value={5}>Size 5</option>
                                <option value={6}>Size 6</option>
                            </select>
                        </div>
                        <div>
                            {
                                widget.size === 1 &&
                                <h1>{widget.name}</h1>
                            }
                            {
                                widget.size === 2 &&
                                <h2>{widget.name}</h2>
                            }
                            {
                                widget.size === 3 &&
                                <h3>{widget.name}</h3>
                            }
                            {
                                widget.size === 4 &&
                                <h4>{widget.name}</h4>
                            }
                            {
                                widget.size === 5 &&
                                <h5>{widget.name}</h5>
                            }
                            {
                                widget.size === 6 &&
                                <h6>{widget.name}</h6>
                            }
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidgetComponent widget={widget} editing={widget.editing}
                                                        updateWidget={updateWidget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidgetComponent widget={widget} editing={widget.editing}
                                                          updateWidget={updateWidget}/>
                            }
                        </div>
                    </div>
                )
            }
        </div>
        <i onClick={() => createWidgetForTopic(topicId)} className="fa fa-plus-square"/>
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
        })),
    deleteWidget: (widget) =>
        widgetService.deleteWidget(widget.id)
            .then(deletedWidget => dispatch({
                type: "DELETE_WIDGET",
                widget: deletedWidget
            })),
    updateWidget: (widget) =>
        widgetService.updateWidget(widget.id, widget)
            .then(updatedWidget => dispatch({
                type: "UPDATE_WIDGET",
                widget: updatedWidget
            })),
    moveWidgetUp: (widget) =>
        widgetService.moveWidgetUp(widget)
            .then(updatedList => dispatch({
                type: "MOVE_WIDGET_UP",
                widgets: updatedList
            })),
    moveWidgetDown: (widget) =>
        widgetService.moveWidgetDown(widget)
            .then(updatedList => dispatch({
                type: "MOVE_WIDGET_DOWN",
                widgets: updatedList
            }))
})
export default connect
(stateToPropertyMapper, dispatchMapper)
(WidgetListComponent);