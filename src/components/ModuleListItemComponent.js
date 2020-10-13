import React from "react";

const ModuleListItemComponent = ({module, selectModule, selectedModule}) =>
    <li onClick={() => selectModule(module)}
        className={module === selectedModule?"list-group-item active":"list-group-item"}>
        <a>{module.title}</a>
        <i className="fa fa-times float-right"/>
    </li>

export default ModuleListItemComponent