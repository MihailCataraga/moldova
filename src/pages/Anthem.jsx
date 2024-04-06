import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Note1 from '../assets/img/note-1.webp'
import Note2 from '../assets/img/note-2.webp'
import Note3 from '../assets/img/note-3.webp'
import Note4 from '../assets/img/note-4.webp'
import Note5 from '../assets/img/note-5.webp'
import Note6 from '../assets/img/note-6.webp'

export default function Anthem() {
  return (
    <div className='anthem'>
        <Navbar />
        <div className='sec-1'>
          <h1>The National Anthem of the Republic of Moldova</h1>
          <p>The National Anthem of the Republic of Moldova is the song "Our language", lyrics by Alexei MATEEVICI (stanzas 1, 2, 5, 8, 12), music by Alexandru CRISTEA, arrangement by Valentin DÎNGA.</p>
        </div>
        <div className='sec-2'>
          <h2>Our language (Limba noastră)</h2>
          <div className='subSec-1'>
            <div className='left'>
              <h3>English version</h3>
              <p>Our language is a treasure</p>
              <p>Deep down,</p>
              <p>A string of rare stones</p>
              <p>On the spilled estate.</p>
              <br />
              <p>Our language is fire, it burns</p>
              <p>In a nation, what without news</p>
              <p>He awoke from the sleep of death,</p>
              <p>Like the hero in the story.</p>
              <br />
              <p>Our language is a green leaf,</p>
              <p>The tumult in the eternal woods,</p>
              <p>The smooth Dniester, what it loses in waves</p>
              <p>Of the candlestick lights.</p>
              <br />
              <p>Our language is a holy language,</p>
              <p>The language of the old boilers,</p>
              <p>Which I cry and which sing</p>
              <p>The peasants at their hearth.</p>
              <br />
              <p>It will reveal a treasure</p>
              <p>Deep down,</p>
              <p>A string of rare stones</p>
              <p>On the spilled estate.</p>
            </div>
            <div className='right'>
              <h3>Romanian version</h3>
              <p>Limba noastră-i o comoară</p>
              <p>În adîncuri înfundată,</p>
              <p>Un şirag de piatră rară</p>
              <p>Pe moşie revărsată.</p>
              <br />
              <p>Limba noastră-i foc, ce arde</p>
              <p>Într-un neam, ce fără veste </p>
              <p>S-a trezit din somn de moarte,</p>
              <p>Ca viteazul din poveste.</p>
              <br />
              <p>Limba noastră-i frunză verde, </p>
              <p>Zbuciumul din codrii veşnici, </p>
              <p>Nistrul lin, ce-n valuri pierde </p>
              <p>Ai luceferilor sfeşnici.</p>
              <br />
              <p>Limba noastră-i limbă sfîntă,</p>
              <p>Limba vechilor cazanii,</p>
              <p>Care-o plîng şi care-o cîntă</p>
              <p>Pe la vatra lor ţăranii.</p>
              <br />
              <p>Răsări-va o comoară </p>
              <p>În adîncuri înfundată,</p>
              <p>Un şirag de piatră rară</p>
              <p>Pe moşie revărsată.</p>
            </div>
          </div>
        </div>
        <div className='sec-3'>
          <h2>The notes of the National Anthem of the Republic of Moldova</h2>
          <div className='notes'>
            <img src={Note1} alt='Notes img' />
            <img src={Note2} alt='Notes img' />
            <img src={Note3} alt='Notes img' />
            <img src={Note4} alt='Notes img' />
            <img src={Note5} alt='Notes img' />
            <img src={Note6} alt='Notes img' />
          </div>
        </div>
        <Footer />
    </div>
  )
}
