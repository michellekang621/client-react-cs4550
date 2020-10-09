import React from "react";
import ModuleListItemComponent from "../components/ModuleListItemComponent";

export class ModuleListContainer extends React.Component{

    state = {
        modules: this.props.modules
    }

    render() {
        return(
            <ul className="list-group">
                {   this.state.modules.map((module, selectModule, selectedModule, key) =>
                    <ModuleListItemComponent
                        module={module}
                        selectedModule={selectedModule}
                        selectModule={selectModule}
                        key={key}/>)}
            </ul>
        )
    }
}