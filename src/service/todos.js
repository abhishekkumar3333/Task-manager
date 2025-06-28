import { Api } from "../api/ApiHandler"

 export const getTodos = async (limit = 10) => {
    try {
        const response  = await Api({
            method : "GET",
            url : `/todos?_limit=${limit}`,
        }) 
        return response
    } catch (error) {
        throw error
    }
}
