"use client";
import MovieCard from '@components/MovieCard'
import { TMDBAPI } from '@interfaces/tmdbAPIInterface';
import satellite from '@services/satellite';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'

export default function MovieTrending() {
    const { isLoading, error, data } = useQuery({
        queryKey: ["TMDBMovieCategory"],
        queryFn: () =>
            satellite
            .get("https://api.themoviedb.org/3/trending/movie/day?language=en-US", {
            headers: {
                Authorization: `Bearer ` + process.env.NEXT_PUBLIC_API_KEY_MOVIE,
            },
            })
            .then((response) => response.data),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-2xl">
            <h3 className="mb-6 font-semibold text-xl">Top 6 Trending</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center">
                {
                    data?.results.splice(0,6).map((movie: TMDBAPI, index: number) => {
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
    )
}
