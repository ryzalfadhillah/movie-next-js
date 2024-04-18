import Header from '@components/Header'
import ListMovie from '@components/MovieList'
import React from 'react'

export const metadata = {
    title: 'Top Rated'
}

export default function TopRated() {
    return (
        <div className="p-6">
            <Header title="Top Rated"/>
            <ListMovie path='top_rated' title='Top Rated Movies' />
        </div>
    )
}
