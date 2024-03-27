import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import locations from '../data/locations'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Location() {
  const {name} = useParams()
  const [info, setInfo] = useState([])
  const [description, setDescription] = useState([])
  useEffect(() => {
    locations.map((location) => {
      if(location.name === name) {
        setInfo(location)
        setDescription(location.description)
      }
    })
  }, [])
  return (
    <div className='location'>
      <Navbar />
      <div className='sec-1'>
        <h1>{info.name}</h1>
        <div className='info'>
          <img src={'../' + info.img} alt={info.name} />
          <div className='infos'>
            {       
              description.map((i) => {
                return (
                  <p key={i.p}>{i.p}</p>
                )
              })
            }
          </div>
          
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
