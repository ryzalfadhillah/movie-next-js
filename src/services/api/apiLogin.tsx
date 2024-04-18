"use server"
import satellite from "@services/satellite";
import { create } from "@store/cookies";
import { setStorage } from "@store/storage";

const apiLogin = async(body: {email: string; password: string}) => (
    await satellite
    .post(process.env.NEXT_PUBLIC_BASE_URL + "/rest/v1/auth/login", body,{
        headers: {
            'Content-Type': 'application/json',
            'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'SAMEORIGIN',
            'X-XSS-Protection': '1; mode=block',
            'api-key':process.env.NEXT_PUBLIC_API_KEY
        },
    })
    .then((response) => {
        create("__TOKEN__", response.data.data[0].tokenSession)
        const storageData = response.data.data[0]
        delete storageData.tokenSession
        return { status: "Success", data: storageData };
    })
    .catch((err) =>{
        console.log(err.response.data)   
        throw err.response.data             
    })
)

export default apiLogin