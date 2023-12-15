import React from 'react'

function Steps({step_no,step_desc,img,step_3_desc}) {
  return (
    <div className=' step'>
            <h2>step {step_no}: </h2>
            <p>{step_desc}</p>
            <p>{step_3_desc}</p>
            <div className='step_img_cont'><img loading='lazy' src={`${img}`} /></div>
    </div>
  )
}

export default Steps