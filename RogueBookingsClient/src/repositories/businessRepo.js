const businessURL = "http://localhost:8080/businesses/"

const businessRepo = {

    async getAllBusinesss(){
        const response = await fetch(businessURL)
        return response.json()
    },

    async addNewBusiness(businessObject){
        const response = await fetch(businessURL, {
            method: "POST",
            body: JSON.stringify(businessObject),
            headers: "Content-Type: application/json"
        })
        return response.json()
    },
    
    async deleteBusinessById(businessId){
        const response = await fetch(businessURL + `${businessId}`, {
            method: "DELETE",
            headers: "Content-Type: application/json"
        })
        return response.json()
    },
    
    async editBusinessById(patchObject, businessId){
        const response = await fetch(businessURL + `${businessId}`, {
            method: "PATCH",
            body : JSON.stringify(patchObject),
            headers: "Content-Type: application/json"
        })
        return response.json()
    },
}

export default businessRepo