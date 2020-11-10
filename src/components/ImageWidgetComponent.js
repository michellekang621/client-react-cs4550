import React from "react";

export class ImageWidgetComponent extends React.Component {
    state = {
        widget: this.props.widget,
        editing: this.props.editing,
        updateWidget: this.props.updateWidget
    }

    updateWidgetSrc = (event) => {
        const newSrc = event.target.value
        const widget = {...this.props.widget}
        this.props.updateWidget({...widget, src: newSrc})
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
                <input value={this.props.widget.src} className={"form-control pad-top"}
                       onChange={this.updateWidgetSrc}/>
                <input value={this.props.widget.name} className={"form-control pad-top"}
                       onChange={this.updateWidgetName}/>
                <div>
                    <h4>Preview</h4>
                    <img src={this.props.widget.src}/>
                </div>
            </div>
        )
    }
}
export default ImageWidgetComponent;