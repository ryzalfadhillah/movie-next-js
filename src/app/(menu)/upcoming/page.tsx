import Header from '@components/Header'
import ListMovie from '@components/MovieList'
import React from 'react'

export const metadata = {
    title: 'Up Coming'
}

export default function Upcoming() {
    return (
        <div className="p-6">
            <Header title="Upcoming"/>
            <ListMovie path='upcoming' title='Upcoming Movies' />
        </div>
    )
}
