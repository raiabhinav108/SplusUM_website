import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <Link to='sign-up'>
        <button className='btn'><i class="fas fa-light fa-magnifying-glass"></i></button>
    </Link>
  )
}

export default Button