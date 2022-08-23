import React from 'react'
import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import ListMovies from '../components/layout/listMovies'

export default function movies() {
  return (
    <div>
        <Header></Header>
        <h1 className='text-4xl text-center my-10'>Moovies </h1>
        <ListMovies></ListMovies>
        <Footer></Footer>
    </div>
  )
}
