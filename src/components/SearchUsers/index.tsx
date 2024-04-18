"use client"
import SearchBar from '@components/searchBar'
import satellite from '@services/satellite'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useState } from 'react'

interface APIGithub {
    avatar_url: string
    name: string
    login: string
    [key: string]: number | string | boolean | object | null ;
}

export default function SearchUsers() {
    const [search, setSearch] = useState<string>("")

    const { isLoading, error, data } = useQuery({
        queryKey: ["githubSearch", search],
        queryFn: () =>
            satellite
            .get("https://api.github.com/search/users?q=" + search, {
                headers: {
                    Authorization: "Bearer" + process.env.token,
                },
            })
            .then((response) => response.data),
            enabled: !!search
      });
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const submitValue = e.currentTarget[0] as HTMLInputElement;
        setSearch(submitValue.value)
    }

    return (
        <div className="flex-1 flex-col">
            <SearchBar onSubmit={onSubmit} />
            <div className='mt-4 px-4'>
                {isLoading && <h1>Pending</h1>}
                { error && <h1>Error</h1>}
                {data?.items.map((user: APIGithub, index: number) => (
            <div
                key={index}
                className="w-full bg-white rounded-xl p-4 my-2 flex-row"
                >
                <Image
                    src={user.avatar_url}
                    alt={user.login}
                    width={100}
                    height={100}
                    className="rounded-xl"
                />
                <p className="ml-4 text-lg">Name: {user.login}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
