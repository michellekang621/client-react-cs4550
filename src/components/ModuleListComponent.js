import React from "react";
import {connect} from "react-redux";
import {
    deleteModule,
    updateModule,
    createModule
        } from "../actions/moduleActions";

const ModuleListComponent = ({modules =[], deleteModule, createModule, updateModule}) =>
    <div>
        <h1>Modules</h1>
        <ul>
            {
                modules.map(module =>
                <li>
                    <button onClick={() => deleteModule(module)}>
                        Delete
                    </button>
                    {
                        module.editing &&
                            <span>
                                <button onClick={() =>
                                    updateModule({...module, editing:false})}>
                                    Ok
                                </button>
                                <input
                                    onChange={(event) => updateModule({...module, title: event.target.value})}
                                    value={module.title}/>
                            </span>
                    }
                    {
                        !module.editing &&
                            <label>
                                <button onClick={() =>
                                    updateModule({...module, editing: true})}>
                                    Edit
                                </button>
                                {module.title}
                            </label>
                    }
                </li>)
            }
        </ul>
        <button onClick={createModule}>
            Create Module
        </button>
    </div>

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteModule: (module) => deleteModule(dispatch, module),
    createModule: () => createModule(dispatch),
    updateModule: (module) => updateModule(dispatch, module)
})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ModuleListComponent)