const moduleUrl = "https://wbdv-generic-server.herokuapp.com/api/001418910/modules"
const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/001418910/lessons"

export const createLessonForModule = (moduleId, lesson) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`)
        .then(response => response.json())

export const findLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}`)
        .then(response => response.json())

export const updateLesson = (lessonId, lesson) =>
    fetch(`${lessonUrl}/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        header: {
            'content-type': 'application.json'
        }
    })
        .then(response => response.json())

export const deleteLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}`, {
        method: "DELETE",
    })
        .then(response => response.json())

export default {
    createLessonForModule,
    findLessonsForModule,
    findLesson,
    updateLesson,
    deleteLesson
}