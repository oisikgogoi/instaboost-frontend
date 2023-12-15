import React from 'react'
import {Link} from 'react-router-dom'
import Steps from '../components/steps'
function Home() {
  return (
    <div>
        <nav className='nav'>
            <div className='logo '>
                <img src='favicon.png'/>
                <p>Insta<span>Boost</span></p>
            </div>
        </nav>

         <div className='home ' id='home'>

          <div className='home_background_curve'></div>
          <img className='home-top-img' src='./public/bg-attr-5.png'/>

          <img src="./public/bg-attr.png" className='follow'  />
          <img src="./public/like.png" className='like' />
          <h1 className='intro'>get free followers</h1>
            <p >
                looking for an effective cheat to boost your social media?
            </p>
            
            <h4>Get up to <span>50 free followers</span> daily with the help of InstaBoost with just a few clicks. <a className='perma' href='#get_followers'> get started  </a>.</h4>
              <h4>still not enough? Dont worry , we have <span>referral rewards </span> which gives you <span> 10 extra followers</span> everytime your friend uses instaboost tools ! <a className='perma' href='#steps'>see how?</a></h4> 
         
         <a href={'#get_followers'}><button>get followers</button></a>
         
         </div>

         <div className='get_followers' id='get_followers'>
            <div className='select'>
            <p>select the number of followers :</p>
            <select>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
            </select>
            </div>
            
            <Link to={'/instagram/login'}><button>get followers</button></Link>
         </div>
         <div className='steps' id='steps'>
          <h3>getting stuck? dont worry , we've got you!!!</h3>
            <Steps 
              step_no={'1'}
              step_desc={'Select the number of followers and click get followers.'}
              img={'./public/step_1.png'}
            />
            <Steps  
            step_no={'2'}
            step_desc={'Login to your instagram. *note( We dont hold any of your information )'}
            img={'./public/step_2.png'}/>
            <Steps
            step_no={'3'}
            step_desc={'Congratulations !! You have recieved your followers !'}
            step_3_desc={`Once you have completed all the steps , u will get your referal link, which can be shared with your friends , so that u will  recieve 10 followers everytime ur friend uses instaboost to boost their following .`}
            img={'./public/step_3.png'}
            />
            
         </div>
         <div className='footer'>
          <p>permalinks</p>
             <div className="links">
                <a href="#home">home</a>
                <a href="#get_followers">get followers</a>
                <a href="#steps">steps</a>
                <a href="/instagram/login">login page</a>
                <a href="">terms</a>
                <a href="">privacy</a>
             </div>

             <address>&copy 2023 all rights reserved by instaboost  </address>

         </div>
    </div>
  )
}

export default Home