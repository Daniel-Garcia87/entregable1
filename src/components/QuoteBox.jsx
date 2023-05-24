import "./styles/QuoteBox.css"
import "./styles/QuotePhrase.css"

const QuoteBox = ({phrase, handleChangeQuote}) => {
  return (
    <section className='quoteBox'>
    <button className='quoteBox__btn' onClick={handleChangeQuote}><i class='bx bx-revision'></i></button>
    <article>
        <p className="quote__phrase">{phrase}</p>
    </article>

  </section>
  )
}

export default QuoteBox