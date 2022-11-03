const ownerURL = "http://localhost:8080/owners/"

const ownerRepo = {

    async getAllOwners(){
        const response = await fetch(ownerURL)
        return response.json()
    },

    async addOwnerToBusinessByIds(userId, businessId){
        const response = await fetch(ownerURL + `${userId}/business/${businessId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        })
        return response.json()
    },
        
    async removeOwnerFromBusinessByOwnersId(ownerId){
        const response = await fetch(ownerURL + `${ownerId}/leave`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
        })
        return response.json()
    },
}

export default ownerRepo