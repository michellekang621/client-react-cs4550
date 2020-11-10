import React from "react";

export class HeadingWidgetComponent extends React.Component {
    state = {
        widget: this.props.widget,
        editing: this.props.editing,
        updateWidget: this.props.updateWidget
    }

    updateWidget = (event) => {
        const newTitle = event.target.value
        const widget = {...this.props.widget}
        this.props.updateWidget({...widget, name: newTitle})

    }

    render() {
        return (
            <div>
                {
                    this.state.editing &&
                    <div>
                        <i onClick={() => this.setState({editing: false})}
                           className="fa fa-check-square float-right element-color"/>
                        <h3>Heading Widget</h3>
                        <div>
                            <input value={this.props.widget.name} className={"form-control pad-top"}
                                   onChange={this.updateWidget}/>
                        </div>

                        <div>
                            <h4>Preview</h4>
                        </div>
                        <div>
                            {this.props.widget.name}
                        </div>
                    </div>
                }
                {
                    !this.state.editing &&
                    <div>
                        <i onClick={() => this.setState({editing: true})}
                           className="fa fa-edit float-right element-color"/>
                        <h3>Heading Widget</h3>
                        <div className={"col form-group"}>
                            <p>{this.props.widget.name}</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default HeadingWidgetComponent;