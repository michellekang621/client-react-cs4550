const url = "http://wbdv-generic-server.herokuapp.com/api/001418910/courses"

export const createCourse = (course) => {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const findAllCourses = () => {
    return fetch(url)
        .then(response => response.json())
}

export const findCourseById = (id) => {
    return fetch(`${url}/${id}`)
        .then(response => response.json())
}

export const updateCourse = (id, course) => {
    return fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const deleteCourse = (id) => {
    return fetch(`${url}/${id}`, {
        method: "DELETE",
    })
        .then(response => response.json())
}

export default {
    findAllCourses, deleteCourse, createCourse, findCourseById, updateCourse
}