import React from "react";
import "../styling/styles.css";
import ModuleListItemComponent from "../components/ModuleListItemComponent";

export class ModuleListContainer extends React.Component{

    state = {
        modules: []
    }

    render() {
        return(
            <div className="col-4 element-color">
            <ul className="list-group">
                <p>HELLO</p>
                {   this.state.modules.map((module, selectModule, selectedModule, key) =>
                    <ModuleListItemComponent
                        module={module}
                        selectedModule={selectedModule}
                        selectModule={selectModule}
                        key={key}/>)}
            </ul>
                <i className="fa fa-plus-square float-right"/>
            </div>
        )
    }
}