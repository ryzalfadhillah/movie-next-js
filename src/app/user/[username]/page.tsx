import satellite from '@services/satellite';
import Image from 'next/image';
// import React from 'react'

type UsernameType = {
    params: {username: string};
}

export function generateMetadata({params: {username}}  : UsernameType) {
    return {
        title: `User ${username}`
    }
}

async function getGithubUser (username:string){
    return satellite.get("https://api.github.com/users/" + username, {
        headers:{
            Authorization: "Bearer " + process.env.token
        }
    })
    .then((res) => {
        console.log(res);
        return res.data
    })
    .catch((err) => {
        console.log(err);
        
    })
}

export default async function UserDetails({ params: { username }} : {params: { username: string }}) {

    const githubUser = await(getGithubUser(username))

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="border bg-white rounded-2xl p-5">
                <h1 className="text-3xl">User Details : <span className="font-bold">{username}</span></h1>    
            <div className="border-t-2 mt-3">
                <Image src={githubUser?.avatar_url} alt={githubUser?.name} width={200} height={200}/>
                <p>Name : {githubUser?.name}</p>
                <p>Bio : {githubUser?.bio}</p>
                <p>Email : {githubUser?.email}</p>
                <p>Location : {githubUser?.location}</p>
            </div>
            </div>
        </div>
    )
}
