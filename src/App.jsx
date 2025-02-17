import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cliniclogo from './assets/cliniclogo.png'
import drphoto from './assets/drphoto.png'
import blacksvg from './assets/blacksvg.svg'
import wpplogo from './assets/Whatsapplogo.png'
import googlelogo from './assets/Googlelogo.png'
import instalogo from './assets/Instagramlogo.png'
import fblogo from './assets/Facebooklogo.png'
import gColorLogo from './assets/google-color.png'
import cclogo from './assets/cclogo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="bg-gradient-to-t from-gray-300 to-white h-42 w-108 flex justify-center">
          <div className='bg-[#10A2D1] flex justify-center h-42 w-80 rounded-3xl'>
            <div className='absolute flex justify-center h-40 p-2 bg-white min-w-80 rounded-b-xl'>
              <img className='' src={cliniclogo} alt="" />
            </div>
          </div>
      </div>
      
      <div>
  <img src={drphoto} alt="" className="relative" />
  <img src={blacksvg} alt="" className="absolute z-50 translate-y-[-200px]" />
  <div className="absolute left-1/2 -translate-x-1/2 text-white z-60 flex justify-center items-center flex-col translate-y-[-60px] w-105">
    <div id="name-container" className="flex-col justify-center text-center">
      <p className="text-2xl font-semibold">
        Dr. Pranav Milind Ambardekar
      </p>
      <p className=''>
        MD Medicine (KEM Hospital, Mumbai) <br />
        DrNB Gastro enterology (AIG Hospital, Hyderabad)
      </p>
    </div>
  </div>
</div>

<div className='bg-black h-35'>

<div id='social-container' className=''>
  <div className='flex items-center justify-center gap-8 translate-y-15'>
  <img src={wpplogo} alt="" />
  <img src={fblogo} alt="" />
  <img src={instalogo} alt="" />
  <img src={googlelogo} alt="" />
  </div>
</div>

</div>

<div id='google-container' className='flex justify-center gap-6 p-3 bg-white '>
    <div id='google-text'>
    <p className='text-2xl '>Your feedback matters!</p>
    <p className='text-2xl font-bold '>Review us on Google :)</p>
    </div>
    <img src={gColorLogo} alt="" />
</div>
<div
  id="footer"
  className="relative flex items-end justify-center w-full bg-black"
>
  {/* Wrapper to hold amber background and white foreground */}
  <div className="relative w-72">
    {/* Amber rectangle (behind) */}
    <div className="bg-amber-300 w-80 h-20 rounded-xl mt-5 translate-x-[-15px]" />

    {/* White card (in front), centered horizontally at the bottom */}
    <div className="absolute bottom-0 z-10 flex flex-col items-center justify-center -translate-x-1/2 bg-white rounded left-1/2 w-80 h-18">
      <p className=' text-[9px]'>Designed By</p>
      <img src={cclogo} alt="Code Canvas Logo" className="h-12" />
    </div>
  </div>
</div>


    </>
  )
}

export default App
