import React from 'react'


const Button = ({colorRandom, ClickgenRandomNumber}) => {
  return (
        <button onClick={ClickgenRandomNumber} style={{backgroundColor: `${colorRandom}`}} className='button'>
            <i className='bx bx-chevron-right'></i>
        </button>
  )
}

export default Button