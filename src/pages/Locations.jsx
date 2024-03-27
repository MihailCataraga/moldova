import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import locations from '../data/locations'

export default function Locations() {
  return (
    <div className='locations'>
        <Navbar />
        <div className='sec-1'>
            <h1>The most important tourist locations in the Republic of Moldova</h1>
            <div className='allLocations'>
                {
                    locations.map((location) => {
                        return (
                            <Link to={`/locations/${location.name}`} key={location.id}>
                                <img src={location.img} alt={location.name} />
                                <h4>{location.name}</h4>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
        <Footer />
    </div>
  )
}
