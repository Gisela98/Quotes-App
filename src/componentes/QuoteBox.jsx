import React from 'react'
import Button from './Button'

const QuoteBox = ({quoteRandom, colorRandom, ClickgenRandomNumber}) => {

  return (
    <article style={{color: colorRandom}} className='box'>
            <div className='card'>
                <span style={{color: colorRandom}} className='click'>
                  <i className='bx bxs-quote-left'></i></span>
                <p className='quote'>{quoteRandom.quote}</p>
            </div>

            <div>
                <p className='author'>{quoteRandom.author}</p>
            </div>

            <div>
              <Button 
                colorRandom={colorRandom}
                ClickgenRandomNumber={ClickgenRandomNumber}
              />
            </div>
    </article>
  )
}

export default QuoteBox