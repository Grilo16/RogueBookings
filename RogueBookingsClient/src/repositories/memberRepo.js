const memberURL = "http://localhost:8080/members/"

const memberRepo = {

    async getAllMembers(){
        const response = await fetch(memberURL)
        return response.json()
    },

    async getAllMembershipsByUserId(userId){
        const response = await fetch(memberURL + `user/${userId}`)
        return response.json()
    },

    async addMemberToBusinessByIds(userId, businessId){
        const response = await fetch(memberURL + `${userId}/business/${businessId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        })
        return response.json()
    },
        
    async removeMemberFromBusinessByMembersId(memberId){
        const response = await fetch(memberURL + `${memberId}/leave`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
        })
        return response.json()
    },
}

export default memberRepo