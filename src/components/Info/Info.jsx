import React from 'react'
import './Info.scss'

function Info() {
  return (
    <div className='info'>
        <div className='container'>
            <h1 className='main__text'>
            Наша цель - создать фантастический <br />
            сервис для всех потребителей
            </h1>
          <div className='info__inner'>
            <div className='info__text1'>
              <h2 className='number'>
                5
              </h2>
              <h2 className='txt'>
              Lorem ipsum dolor sit amet consectetur. <br /> Rhoncus risus nunc a pharetra viverra enim <br /> nunc. 
              </h2>
            </div>
            <div className='info__text2'>
              <h2 className='number'>
              30
              </h2>
              <h2 className='txt'>
              Gravida vel convallis id aliquet volutpat <br /> nullam dignissim. Amet parturient <br /> elementum lectus rhoncus at.
              </h2>
            </div>
            <div className='info__text3'>
              <h2 className='number'>
              300
              </h2>
              <h2 className='txt'>
              Sed varius ut venenatis id amet et <br /> consectetur pellentesque. Vitae urna ornare <br /> vel suspendisse tincidunt. 
              </h2> 
            </div>
            <div className='info__text4'>
              <h2 className='number'>
              8
              </h2>
              <h2 className='txt'>
              Id enim ornare lacus duis. Ac fermentum <br /> auctor cras adipiscing feugiat quis convallis <br /> velit. 
              </h2>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Info