const teacherURL = "http://localhost:8080/teachers/"

const teacherRepo = {

    async getAllTeachers(){
        const response = await fetch(teacherURL)
        return response.json()
    },

    async addTeacherToLessonByIds(memberId, lessonId, teacherObject){
        const response = await fetch(teacherURL + `${memberId}/lesson/${lessonId}`, {
            method: "POST",
            body: JSON.stringify(teacherObject),
            headers: { "Content-Type": "application/json" }
        })
        return response.json()
    },
    
    async removeTeacherFromLessonByTeachersId(teacherId){
        const response = await fetch(teacherURL + `${teacherId}/leave`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
        })
        return response.json()
    },
}

export default teacherRepo