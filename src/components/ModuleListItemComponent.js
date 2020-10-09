import React from "react";

const ModuleListItemComponent = ({module, selectModule, selectedModule}) =>
    <li onClick={() => selectModule(module)}
        className={module === selectedModule?"list-group-item active":"list-group-item"}>
        <a>{module.title}</a>
    </li>

export default ModuleListItemComponent