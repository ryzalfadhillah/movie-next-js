"use client"
import MovieCard from '@components/MovieCard';
import SearchBar from '@components/searchBar';
import { TMDBAPI } from '@interfaces/tmdbAPIInterface';
import satellite from '@services/satellite';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'

export default function SearchMovie() {
    const [search, setSearch] = useState<string>("");
    const { isLoading, error, data } = useQuery({
        queryKey: ["TMDBMovieSearch", search],
        queryFn: () =>
            satellite
            .get("https://api.themoviedb.org/3/search/movie?query=" + search, {
            headers: {
                Authorization: `Bearer ` + process.env.NEXT_PUBLIC_API_KEY_MOVIE,
            },
            })
            .then((response) => response.data),
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const submitValue = e.currentTarget[0] as HTMLInputElement;
        setSearch(submitValue.value)
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    
    return (
        <>
            <SearchBar onSubmit={onSubmit} placeholder="Search Movies"/>
            {/* {data?.result &&  */}
                <div className="bg-white p-6 rounded-2xl mt-2 shadow-2xl">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {
                            data?.results.map((movie: TMDBAPI, index: number) => {
                            return( 
                                <MovieCard 
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    date={movie.release_date}
                                    image={movie.backdrop_path}
                                />
                            )})
                        }
                    </div>
                </div>
            {/* } */}
        </>
    )
}
