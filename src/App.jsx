import { useState } from 'react'
import './App.css'
import QuoteBox from './componentes/QuoteBox'
import quote from './quotes.json'

const arrayColors = [
  '#FF01FB', '#02A9EA', '#642CA9', '#004F2D', '#14453D', '#B8336A', '#320E3B', '#D87CAC', '#C34A36'
]

function App() {

  const Number = maxNum => {
    return Math.floor(Math.random() * maxNum.length)
  }


  let QuoteRandom = Number(quote)
  const [quoteRandom, setQuoteRandom] = useState(quote[QuoteRandom])

  let ColorRandom = Number(arrayColors) 
  const [colorRandom, setColorRandom] = useState(arrayColors[ColorRandom])


  let QuoteRandomSecond = Number(quote)
  let ColorRandomSecond = Number(arrayColors)

  const ClickgenRandomNumber = () => {
    if(quoteRandom === quoteRandom) {
      setQuoteRandom(quote[QuoteRandomSecond])
      setColorRandom(arrayColors[ColorRandomSecond])
    }
  }

  const Style = {
    backgroundColor: colorRandom
  } 

  return (
    <div style={Style} className="App">
      <QuoteBox
      quoteRandom={quoteRandom}
      colorRandom={colorRandom}
      ClickgenRandomNumber={ClickgenRandomNumber}
      />
    </div>
  )
} 

export default App
