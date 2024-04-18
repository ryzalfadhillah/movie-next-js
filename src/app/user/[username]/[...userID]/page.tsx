import React from 'react'

export default function UserDetails({ params: { userID }} : {params: { userID: string }}) {
    return (
        <div className="min-h-screen flex justify-center items-center text-3xl">User Details --- {userID}</div>
    )
}
