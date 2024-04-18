// import React from 'react'

import Header from "@components/Header";
import MovieTrending from "@components/MovieTrending";
import SearchMovie from "@components/SearchMovie";
import ImgHero from "@assets/images/cinema.jpg"

export default function Home() {
  return (
    <>
      <div className="p-6">
          <Header title="Home"/>
          <div className="p-8 flex flex-col justify-start items-start md:h-44 lg:h-80 rounded-2xl mb-8 shadow-2xl"
          style={{
            backgroundImage: `url(${ImgHero.src})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom"
          }}>
            <h1 className="text-white text-6xl font-bold">Cinema TIK</h1>
            <p className="text-white text-justify">Millions of movies, TV shows and people to discover. Explore now.</p>
          </div>
          <MovieTrending />
          <SearchMovie />
      </div>
    </>
  )
}
