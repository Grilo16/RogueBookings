const studentURL = "http://localhost:8080/students/"

const studentRepo = {

    async getAllStudents(){
        const response = await fetch(studentURL)
        return response.json()
    },

    async addStudentToLessonByIds(userId, lessonId){
        const response = await fetch(studentURL + `${userId}/lesson/${lessonId}`, {
            method: "POST",
            headers: "Content-Type: application/json"
        })
        return response.json()
    },
        
    async removeStudentFromLessonByStudentsId(studentId){
        const response = await fetch(studentURL + `${studentId}/leave`, {
            method: "PUT",
            headers: "Content-Type: application/json"
        })
        return response.json()
    },
}

export default studentRepo