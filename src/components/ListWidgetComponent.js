import React from "react";

export class ListWidgetComponent extends React.Component {
    state = {
        widget: this.props.widget,
        editing: this.props.editing,
        updateWidget: this.props.updateWidget,
        listType: "UL"
    }

    updateWidgetName = (event) => {
        const newTitle = event.target.value
        const widget = {...this.props.widget}
        this.props.updateWidget({...widget, name: newTitle})
    }

    updateWidgetText = (event) => {
        const newText = event.target.value
        const widget = {...this.props.widget}
        this.props.updateWidget({...widget, text: newText})
    }

    render() {
        return (
            <div>
                <h3>List widget</h3>
            <div>
                <textarea value={this.props.widget.text} className={"form-control"}
                          onChange={this.updateWidgetText}/>
            </div>
                <div className={"pad-top"}>
                <select className={"float-right col-md-auto"}
                        onChange={(event) =>
                            this.setState({listType: event.target.value})}>
                    <option value={"UL"}>Unordered list</option>
                    <option value={"OL"}>Ordered list</option>
                </select>
                </div>
                <div className={"pad-top"}>
                <input value={this.props.widget.name} className={"form-control pad-top"}
                       onChange={this.updateWidgetName}/>
                </div>
                <div>
                    <h4>Preview</h4>
                    {
                        this.state.listType === "UL" &&
                            <ul>
                                <li>{this.props.widget.text}</li>
                            </ul>
                    }
                    {
                        this.state.listType === "OL" &&
                            <ol>
                                <li>{this.props.widget.text}</li>
                            </ol>
                    }
                </div>
            </div>
        )
    }
}
export default ListWidgetComponent;