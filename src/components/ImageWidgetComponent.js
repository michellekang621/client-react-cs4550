import React from "react";

export class ImageWidgetComponent extends React.Component {
    state = {
        widget: this.props.widget,
        editing: this.props.editing,
        updateWidget: this.props.updateWidget
    }

    updateWidgetName = (event) => {
        const newTitle = event.target.value
        const widget = {...this.props.widget}
        this.props.updateWidget({...widget, name: newTitle})
    }

    render() {
        return (
            <div>
                <h3>Image Widget</h3>
                <input value={"Image URL"}/>
                <input value={this.props.widget.name} className={"form-control pad-top"}
                       onChange={this.updateWidgetName}/>
                <div>
                    <h4>Preview</h4>
                    <image></image>
                </div>
            </div>
        )
    }
}
export default ImageWidgetComponent;