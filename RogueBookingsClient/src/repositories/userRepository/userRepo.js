const userURL = "http://localhost:8080/users/"

const userRepo = {

    async getAllUsers(){
        const response = await fetch(userURL)
        return response.json()
    }

}

export default userRepo