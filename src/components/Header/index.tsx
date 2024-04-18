import React from 'react'

export default function Header({title}: {title: string}) {
    return (
        <div className="flex justify-between mb-6">
            <p>{title}</p>
            <p>Berijalan Member of Astra</p>
        </div>
    )
}
