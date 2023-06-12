import React from 'react'
import './Brand.scss'
import { Link } from 'react-router-dom'

function Brand() {
  return (
    <div className='container'>
        <div className='brand'>
          <h4>Новинки</h4>
          <Link className='first__link'>К новинкам</Link>
        </div>
        <div className='brand__inner'>
          <ul className='brand__items'>
            <li>
              <img src="" alt="" />
              <Link></Link>
              <h3></h3>     
              <Link></Link> 
              <h3></h3>
              
            </li>
          </ul>
        </div>
        <div className='brand__swipper'>

        </div>
    </div>
  )
}

export default Brand