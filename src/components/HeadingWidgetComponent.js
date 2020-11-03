import React from "react";

const HeadingWidgetComponent = ({widget, editing, updateWidget}) =>
    <div>
        {
            editing &&
            <div>
                <h3>Heading Widget</h3>
                <div>
                    <input value={"Heading Name"} className={"form-control pad-top"}
                           onChange={(event) =>
                               updateWidget({...widget, name: event.target.value})}/>
                </div>

                <div>
                    <h4>Preview</h4>
                </div>
                <div>
                    {widget.name}
                </div>
            </div>
        }
        {
            !editing &&
            <div>
                <h3>Heading Widget</h3>
                <div className={"col form-group"}>
                    <p>{widget.name}</p>
                </div>
            </div>
        }
    </div>

export default HeadingWidgetComponent;