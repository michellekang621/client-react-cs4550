import moduleService from "../services/ModuleService"
export const DELETE_MODULE = "DELETE_MODULE"
export const CREATE_MODULE = "CREATE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"

export const createModule = (dispatch, course, module) =>
    moduleService.createModuleForCourse(course._id, module)
        .then(actualModule => dispatch({
            type: CREATE_MODULE,
            module: actualModule
        }))

export const findModulesForCourse = (dispatch, course) =>
    moduleService.findModulesForCourse(course._id)
        .then(modules => dispatch ({
            type: "FIND_MODULES_FOR_COURSE",
            modules: modules
        }))

export const findModule = (dispatch, module) =>
    moduleService.findModule(module._id)
        .then(module => dispatch ({
            type: "FIND_MODULE_BY_ID",
            module: module
        }))

export const updateModule = (dispatch, module) =>
    moduleService.updateModule(module._id, module)
        .then(status => dispatch({
            type: UPDATE_MODULE,
            module: module
        }))

export const deleteModule = (dispatch, module) =>
    moduleService.deleteModule(module._id)
        .then(status => dispatch({
            type: DELETE_MODULE,
            module: module
        }))

