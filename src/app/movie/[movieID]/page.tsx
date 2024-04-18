import Header from '@components/Header';
import MovieDetail from '@components/MovieDetail';
import React from 'react'

export function generateMetadata() {
    return {
        title: `Details Movie`
    }
}

export default function DetailMovie({
    params: {movieID}
}: {params: {movieID: number}}) {
    return (
        <div className="p-6">
            <Header title="Details"/>
            <MovieDetail movieID={movieID}/>
        </div>
    )
}
