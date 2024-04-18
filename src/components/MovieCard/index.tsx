import { MovieInfo } from '@interfaces/movieInterface';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function MovieCard({
    key,
    id,
    title,
    date,
    image,
}: Readonly<MovieInfo>) {
    const releaseDate = new Date(date);
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    const monthIndex = releaseDate.getMonth();
    const month = monthNames[monthIndex];
    const day = releaseDate.getDate();
    const year = releaseDate.getFullYear();

    return (
        <Link
            key={key}
            href={`/movie/${id}`}
            className="w-fit bg-[#789461] shadow-lg rounded-2xl hover:scale-105 cursor-pointer transition-transform duration-300"
        >
            <div className="relative">
                <Image
                    src={image? "https://image.tmdb.org/t/p/w220_and_h330_bestv2/" + image : `https://placehold.co/500x750.jpg`}
                    alt={""}
                    width={400}
                    height={500}
                    className="rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2 rounded-b-2xl">
                    <p className="font-bold text-base text-white truncate">{title}</p>
                    <p className="font-bold text-xs text-white truncate">{`${day} ${month} ${year} `}</p>
                </div>
            </div>
        </Link>
    );
}
