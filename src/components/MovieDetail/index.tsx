"use client"
import satellite from '@services/satellite';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react'

interface APIMovie {
    [key: string]: number | string | boolean | null | undefined | object;
    original_title: string;
    poster_path: string;
    overview: string;
    name: string;
}


export default function MovieDetail({movieID}: {movieID: number}) {

    const { isLoading, error, data } = useQuery({
        queryKey: ["detailMovie"],
        queryFn: () =>
            satellite
            .get("https://api.themoviedb.org/3/movie/" + movieID, {
            headers: {
                Authorization: `Bearer ` + process.env.NEXT_PUBLIC_API_KEY_MOVIE,
            },
            })
            .then((response) => response.data),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="bg-white p-6 rounded-2xl grid lg:grid-cols-2 gap-4">
            <div className="flex justify-center">
            <Image
                src={
                data?.poster_path
                    ? `https://image.tmdb.org/t/p/w220_and_h330_bestv2/${data.poster_path}` : `https://placehold.co/300x400.jpg`
                }
                alt="testing 2"
                width={300}
                height={400}
                className="rounded-2xl shadow-2xl"
            />
            </div>
            <div>
                <div className="title">
                    <h2 className="text-3xl font-bold">{data?.original_title}</h2>
                    <div className="flex gap-1 my-4">
                        {data?.genres?.map((genre: APIMovie, index: number) => {
                        return (
                            <p key={index} className="cursor-default border border-[#789461] rounded-full py-1 px-2 text-white bg-[#789461] flex items-center justify-center">
                            {genre.name}
                            </p>
                        );
                        })}
                    </div>
                    <table className='mb-2'>
                        <tbody>
                            <tr>
                                <td className='font-bold'>Status</td>
                                <td> : </td>
                                <td>{data?.status}</td>
                            </tr>
                            <tr>
                                <td className='font-bold'>Rating</td>
                                <td> : </td>
                                <td>{data?.vote_average}/10</td>
                            </tr>
                            <tr>
                                <td className='font-bold'>Tagline</td>
                                <td> : </td>
                                <td>{data?.tagline}</td>
                            </tr>
                            <tr>
                                <td className='font-bold'>Homepage</td>
                                <td> : </td>
                                <td><a href={data?.homepage} target="_blank" rel="noopener noreferrer" className='hover:text-blue-700'>{data?.homepage}</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="overview">
                    <p className="font-bold">Overview</p>
                    <p className='text-justify'>{data?.overview}</p>
                </div>
            </div>
        </div>
    )
}
