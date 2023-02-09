import React, { Component } from 'react'
import spin from './spin.gif'

const Loading = ()=>{
  
    return (
      <div className='text-center'>
        <img src={spin} alt="Loading ..." />
      </div>
    )
  
}


export default Loading
