const localStorageRepo = {

    logIn(user){
        localStorage.setItem("user", JSON.stringify({userId: user.id, userName : user.firstName + " " + user.lastName}))
    },


    logOut(){
        if (localStorage.getItem("user")){
            localStorage.removeItem("user")
        }
    }
    

}

export default localStorageRepo;