import { useState } from 'react'
import './App.css'
import dbQuote from "./db/quote.json"
import { getRandom } from './utils/rabdom'
import QuoteBox from './components/QuoteBox'
import Infobox from './components/InfoBox'
import Authorbox from './components/AuthorBox'

const bgImages = ["sp1", "sp2", "sp3", "sp4"]

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuote))
  const [bgImage, setBgImage] = useState(getRandom(bgImages))


const handleChangeQuote = () => {
  setQuote(getRandom(dbQuote))
  setBgImage(getRandom(bgImages))
}

  return <main className={`app ${bgImage}`}> 
    <section className='app__container'>
      
      <Infobox/>
      
      <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase} /> 

      <Authorbox author={quote.author}/>
     

    </section>
  </main>
  
}

export default App
