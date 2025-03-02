import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import animation from '../assets/animation.gif'

const spinner = () => {
    return (
      <div className='text-center flex justify-center'>
        <img src={animation} alt="loading" />
      </div>
    )
}

export default spinner
