import React from "react";

const ParagraphWidgetComponent = ({widget, editing, updateWidget}) =>
    <div>
        {
            editing &&
            <div>
                <div className={"col form-group"}>
                    <h3>Paragraph Widget</h3>
                </div>
                <textarea value={"Lorem ipsum"} className={"form-control"}
                          onChange={(event) =>
                              updateWidget({...widget, text: event.target.value})}/>
                <div>
                    <input value={"Paragraph Name"} className={"form-control pad-top"}
                           onChange={(event) =>
                               updateWidget({...widget, name: event.target.value})}/>
                </div>
                <div>
                    <h4>Preview</h4>
                </div>
                <div>
                    <p>Lorem ipsum</p>
                </div>
            </div>
        }
        {
            !editing &&
            <div>
                <h3>Paragraph Widget</h3>
                <div className={"col form-group"}>
                    <p>{widget.name}</p>
                    <p>{widget.text}</p>
                </div>
            </div>
        }

    </div>

export default ParagraphWidgetComponent