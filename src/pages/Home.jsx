import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className='sec-1'>
          <div className='card'>
            <h3>Republic of</h3>
            <h1>Moldova</h1>
            <p>Moldova, a country located in Eastern Europe, known for its varied landscapes, which include mountains, forests and picturesque rivers, as well as its rich and diverse cultural heritage.</p>
          </div>
          <div className='hexagon1 hex'></div>
          <div className='hexagon2 hex'></div>
          <div className='hexagon3 hex'></div>
          <div className='hexagon4 hex'></div>
          <div className='hexagon5 hex'></div>
          <div className='hexagon6 hex'></div>
          <div className='hexagon7 hex'></div>
        </div>
    </div>
  )
}
