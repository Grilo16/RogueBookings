const userURL = "http://localhost:8080/users/"

const userRepo = {

    async getAllUsers(){
        const response = await fetch(userURL)
        return response.json()
    },


    async getUserById(userId){
        const response = await fetch(userURL + `${userId}`)
        return response.json()
    },

    async getUserByEmail(userEmail){
        const response = await fetch(userURL + `email/${userEmail}`)
        return response.json()
    },

    async addNewUser(userObject){
        const response = await fetch(userURL, {
            method: "POST",
            body: JSON.stringify(userObject),
            headers: { "Content-Type": "application/json" },
        })
        return response.json()
    },
    
    async deleteUserById(userId){
        const response = await fetch(userURL + `${userId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
        return response.json()
    },
    
    async editUserById(patchObject, userId){
        const response = await fetch(userURL + `${userId}`, {
            method: "PATCH",
            body : JSON.stringify(patchObject),
            headers: { "Content-Type": "application/json" },
        })
        return response.json()
    },
}

export default userRepo