import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Moldova from '../assets/img/Moldova.webp';
import MapMd from '../assets/img/Map.webp';
import Constitutia from '../assets/img/Consitutia.webp';
import Catedrala from '../assets/img/Catedrala.webp';
import Haine from '../assets/img/Haine.webp';
import Mestesug from '../assets/img/Mestesug.webp';
import Struguri from '../assets/img/Struguri.webp';
import Paine from '../assets/img/Paine.webp';
import { GiMoldova } from "react-icons/gi";
import { FaSearchLocation } from "react-icons/fa";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const EMAIL = "hhh@gmail.com"


  const postData = async () => {
    try {
      const response = await fetch('https://demo1-liart.vercel.app/resend-registration-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: EMAIL}),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result)
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getData = async () => {
    try {
      const response = await fetch('https://demo1-liart.vercel.app/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      setData(result.msg);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const img = () => {
      const elem = document.getElementById('Moldova');
      const elem1 = document.getElementById('Map');
      const elem2 = document.getElementById('Constitutia');
      const currentPosition = window.scrollY;
      if (currentPosition >= 700) {
        elem.style.opacity = '100%'
      }
      if (currentPosition <= 100) {
        elem.style.opacity = '0%'
      }
      if (currentPosition >= 1100) {
        elem1.style.opacity = '100%'
      }
      if (currentPosition <= 400) {
        elem1.style.opacity = '0%'
      }
      if (currentPosition >= 1600) {
        elem2.style.opacity = '100%'
      }
      if (currentPosition <= 1100) {
        elem2.style.opacity = '0%'
      }
    }
    document.addEventListener('scroll', img)
    return () => (
      document.removeEventListener('scroll', img)
    )
  }, [])
  return (
    <div className='home'>
      <Navbar />
      <div className='sec-1'>
        <div className='filter'>
          <div className='card'>
            <p className='title'>Republic of</p>
            <p>Moldova</p>
            <h1>Moldova, a country located in Eastern Europe, is known for its varied landscapes, which include hills, forests and picturesque rivers.</h1>
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
      <button onClick={postData}>Send</button>
      <p>{data}</p>
      <div className='sec-2'>
        <div className='triangle'></div>
        <div className='content'>
          <div className='subSec-1'>
            <div className='left'>
              <h2>Moldova: A look at its history, culture and identity</h2>
              <p>Located in the heart of Eastern Europe, Moldova is a country with a rich history, a vibrant culture and a distinct identity. Over the centuries, this country has witnessed political, social and cultural transformations, which have contributed to its formation as a state and the development of its unique characteristics.</p>
            </div>
            <div className='right'>
              <img id='Moldova' src={Moldova} alt='Img Moldova' />
            </div>
          </div>
          <div className='subSec-2'>
            <div className='left'>
              <img id='Map' src={MapMd} alt='Img Map' />
            </div>
            <div className='right'>
              <h2>Independence and the Road to Sovereignty</h2>
              <p>Moldova gained its independence in 1991, after the breakup of the Soviet Union. This crucial moment marked the beginning of a new era in the country's history, in which it embarked on a process of building a democratic and pluralistic society. Although the road to independence has been full of challenges and obstacles, the Moldovan people have expressed their firm will to determine their own future and promote their national interests within the international community.</p>
            </div>
          </div>
          <div className='subSec-3'>
            <div className='left'>
              <h2>The Constitution and Democratic Principles</h2>
              <p>The Constitution of the Republic of Moldova, adopted in 1994, is the cornerstone of the rule of law and democracy in the country. It enshrines the fundamental principles of the rule of law, respect for human rights and fundamental freedoms, the separation of powers in the state and the democratic principles of governance. This constitution serves as a guide for Moldovan institutions and citizens in their efforts to build and maintain a democratic and fair system.</p>
            </div>
            <div className='right'>
              <img id='Constitutia' src={Constitutia} alt='Img Constitution' />
            </div>
          </div>
          <div className='subSec-4'>
            <div className='left'>
              <h2>Language and Cultural Diversity</h2>
              <p>The official language of Moldova is Romanian, reflecting its close historical and linguistic ties with other Romanian-speaking countries. However, other languages such as Russian, Ukrainian, Bulgarian and Gagauz are also spoken among the population. This linguistic diversity reflects Moldova's complex history and cultural heritage, as well as its interactions with different ethnic groups and communities in the region.</p>
            </div>
            <div className='right'>
              <h2>Traditions and customs</h2>
              <p>Folk traditions and customs occupy a special place in the heart and life of Moldovan communities. From folk festivals and religious holidays to rituals and practices passed down through the generations, Moldovan traditions are a living expression of its people's identity and cultural values. Traditional dances, folk music, handicrafts and traditional cuisine are just a few examples of Moldova's cultural wealth.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='sec-3'>
        <img src={Mestesug} alt='Symbol img' />
        <img src={Catedrala} alt='Symbol img' />
        <img src={Haine} alt='Symbol img' />
        <img src={Paine} alt='Symbol img' />
        <img src={Struguri} alt='Symbol img' />
      </div>
      <div className='sec-4'>
        <div className='content'>
          <h2>Go to see more about:</h2>
          <div className='links'>
            <Link to='anthem'>
              <GiMoldova className='icon' />
              Anthem
            </Link>
            <Link to='locations'>
              <FaSearchLocation className='icon' />
              The best locations
            </Link>
          </div>
        </div>
        <div className='triangle'></div>
      </div>
      <Footer />
    </div>
  )
}
