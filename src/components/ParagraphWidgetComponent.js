import React from "react";

export class ParagraphWidgetComponent extends React.Component {

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


    updateWidgetText = (event) => {
        const newText = event.target.value
        const widget = {...this.props.widget}
        this.props.updateWidget({...widget, text: newText})
    }

    render() {
        return (
            <div>
                {
                    this.state.editing &&
                    <div>
                        <i onClick={() => this.setState({editing: false})}
                           className="fa fa-check-square float-right element-color"/>
                        <div className={"col form-group"}>
                            <h3>Paragraph Widget</h3>
                        </div>
                        <input value={this.props.widget.name} className={"form-control pad-top"}
                               onChange={this.updateWidgetName}/>
                        <div>
                            <textarea value={this.props.widget.text} className={"form-control"}
                                      onChange={this.updateWidgetText}/>
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
                    !this.state.editing &&
                    <div>
                        <i onClick={() => this.setState({editing: true})}
                           className="fa fa-edit float-right element-color"/>
                        <h3>Paragraph Widget</h3>
                        <div className={"col form-group"}>
                            <p>{this.props.widget.name}</p>
                            <p>{this.props.widget.text}</p>
                        </div>
                    </div>
                }

            </div>
        )
    }
}

export default ParagraphWidgetComponent;