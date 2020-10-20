const url = "https://wbdv-generic-server.herokuapp.com/api/001418910/courses"
const moduleUrl = "https://wbdv-generic-server.herokuapp.com/api/001418910/modules"

export const createModuleForCourse = (courseId, module) =>
    fetch(`${url}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const findModulesForCourse = (courseId) =>
    fetch(`${url}/${courseId}/modules`)
        .then(response => response.json())

export const findModule = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}`)
        .then(response => response.json())

export const updateModule = (moduleId, module) =>
    fetch(`${moduleUrl}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

export default {
    createModuleForCourse,
    findModulesForCourse,
    findModule,
    updateModule,
    deleteModule
}