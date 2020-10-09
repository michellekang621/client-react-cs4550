const url = "http://wbdv-generic-server.herokuapp.com/api/001418910/courses"

export const createCourse = (course) =>
    fetch(url, {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const findAllCourses = () => {
    fetch(url)
        .then(response => response.json())
}

export const findCourseById = (id) => {
    fetch(`${url}/${id}`)
        .then(response => response.json())
}

export const updateCourse = (id, course) => {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const deleteCourse = (id) => {
    fetch(`${url}/${id}`, {
        method: "DELETE",
    })
        .then(response => response.json())
}