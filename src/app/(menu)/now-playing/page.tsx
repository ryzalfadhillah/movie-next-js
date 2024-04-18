import Header from '@components/Header'
import ListMovie from '@components/MovieList'
import React from 'react'

export const metadata = {
    title: 'Now Playing'
}

export default function NowPlaying() {
    return (
        <div className="p-6">
            <Header title="Now Playing"/>
            <ListMovie path='now_playing' title='Now Playing Movies' />
        </div>
    )
}
