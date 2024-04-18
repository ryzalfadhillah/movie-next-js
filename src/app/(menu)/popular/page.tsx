import Header from '@components/Header'
import ListMovie from '@components/MovieList'
import React from 'react'

export const metadata = {
    title: 'Popular'
}

export default function Popular() {
    return (
        <div className="p-6">
            <Header title="Popular"/>
            <ListMovie path='popular' title='Most Popular Movies' />
        </div>
    )
}
