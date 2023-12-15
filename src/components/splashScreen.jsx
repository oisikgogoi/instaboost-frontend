import React from 'react'

function SplashScreen() {
  return (
    <div className='splashScreen'>
       <img src="/splashScreen.png" alt="Instagram Logo" className="instagram-logo" />
       <div className='from_meta'>
            <p>from</p>
            <img src='/fromMeta.svg'/>
       </div>
    </div>
  )
}

export default SplashScreen