import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
    deleteModule,
    updateModule,
    createModule,
    findModulesForCourse,
    findModule
} from "../actions/moduleActions";

const ModuleListComponent = ({course, modules = [], deleteModule, createModule, updateModule}) =>
    <div>
        {console.log("INSIDE MODULE COMPONENT " + course._id)}
        <h1>Modules</h1>
        <ul class="list-group">
            {
                modules.map(module =>
                    <li key={module._id} class="list-group-item">

                            {
                                module.editing &&
                                <span>
                                <i onClick={() => updateModule({...module, editing: false})}
                                        className="fa fa-check-square float-right pad-element element-color"/>
                                <i onClick={() => deleteModule(module)}
                                   className="fa fa-trash float-right pad-element element-color"/>
                                <input
                                    onChange={(event) => updateModule({...module, title: event.target.value})}
                                    value={module.title}/>
                                </span>
                            }
                            {
                                !module.editing &&
                                <label>
                                    <i onClick={() => updateModule({...module, editing: true})}
                                            className="fa fa-edit float-right pad-element element-color"/>
                                    <Link to={`/edit/${course._id}/modules/${module._id}`}>
                                    {module.title}
                                    </Link>
                                </label>
                            }
                    </li>
                )
            }
        </ul>
        <button onClick={() => createModule(course, {title: "New Module"})}>
            Create Module
        </button>
    </div>

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteModule: (module) => deleteModule(dispatch, module),
    createModule: (course, module) => createModule(dispatch, course, module),
    updateModule: (module) => updateModule(dispatch, module),
    // findModulesForCourse: (course) => findModulesForCourse(dispatch, course),
    // findModule: (module) => findModule(dispatch, module)
})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ModuleListComponent)