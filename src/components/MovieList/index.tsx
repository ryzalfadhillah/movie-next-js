"use client";
import MovieCard from '@components/MovieCard'
import { TMDBAPI } from '@interfaces/tmdbAPIInterface';
import satellite from '@services/satellite';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'

export default function ListMovie(
    {
        path,
        title,
    }:
    {
        path: string,
        title: string
    }
) {
    const [page, setPage] = useState(1);
    const { isLoading, error, data } = useQuery({
        queryKey: ["TMDBMovieCategory", page],
        queryFn: () =>
            satellite
            .get("https://api.themoviedb.org/3/movie/" + path + "?page=" + page, {
            headers: {
                Authorization: `Bearer ` + process.env.NEXT_PUBLIC_API_KEY_MOVIE,
            },
            })
            .then((response) => response.data),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handlePrevPage = () => {
        setPage((prevPage) => prevPage - 1); // Mengurangi nomor halaman
    };

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1); // Menambah nomor halaman
    };

    return (
        <div className="bg-white p-6 rounded-2xl">
            <h3 className="mb-6 font-semibold text-xl">{title}</h3>
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
            <div className='flex justify-center items-center mt-8 gap-4'>
                <button 
                    className='cursor-pointer bg-transparent border border-[#789461] rounded py-2 px-4 text-[#789461] hover:bg-[#789461] hover:text-white hover:scale-110'
                    onClick={handlePrevPage} 
                    disabled={page === 1}>
                        Prev
                </button>
                <p className='cursor-default border border-[#789461] rounded py-2 px-4 text-white bg-[#789461]'>{page}</p>
                <button 
                    className='cursor-pointer bg-transparent border border-[#789461] rounded py-2 px-4 text-[#789461] hover:bg-[#789461] hover:text-white hover:scale-110'
                    onClick={handleNextPage} 
                    disabled={page === data?.total_pages}>
                        Next
                </button>
            </div>
        </div>
    )
}
