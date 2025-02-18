import { useState } from 'react'
import './App.css'
import cliniclogo from './assets/cliniclogo.png'
import drphoto from './assets/drNoBackground.png'
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
    // Main container to fix the viewport width at 430px and center it
    <div className="w-[430px] mx-auto">
      {/* Header */}
      <div className="flex justify-center w-full bg-gradient-to-b from-gray-400 to-white h-42">
        <div className="bg-[#10A2D1] flex justify-center h-42 w-80 rounded-3xl">
          <div className="absolute flex justify-center h-40 p-2 bg-white min-w-80 rounded-b-xl">
            <img src={cliniclogo} alt="Clinic Logo" />
          </div>
        </div>
      </div>

      {/* Doctor Photo & Overlay */}
      <div className="relative w-full">
        <img src={drphoto} alt="Doctor" className="w-full" />
        <img
          src={blacksvg}
          alt="Overlay"
          className="absolute z-50 left-0 right-0 mx-auto translate-y-[-200px]"
        />
        <div className="absolute left-1/2 -translate-x-1/2 text-white z-60 flex flex-col items-center justify-center translate-y-[-60px] w-full">
          <div id="name-container" className="flex-col justify-center text-center">
            <p className="text-2xl font-semibold">
              Dr. Pranav Milind Ambardekar
            </p>
            <p>
              MD Medicine (KEM Hospital, Mumbai) <br />
              DrNB Gastro enterology (AIG Hospital, Hyderabad)
            </p>
          </div>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="flex items-center justify-center w-full bg-black h-35">
        <div id="social-container">
          <div className="flex items-center justify-center gap-8 translate-y-2">
          <a 
          href="https://wa.me/9762046749?text=Hello%20there!" 
          target="_blank" 
          rel="noopener noreferrer"
          >
          <img src={wpplogo} alt="Whatsapp Logo" />
          </a>

            <a href="https://www.facebook.com/profile.php?id=61572990362892">
              <img src={fblogo} alt="Facebook Logo" />
            </a>
            <a href="https://www.instagram.com/dr_pranav_ambardekar.gastro/">
              <img src={instalogo} alt="Instagram Logo" />
            </a>
            <a href="https://g.page/r/CRz-z1u8Gl5uEAI/review">
              <img src={googlelogo} alt="Google Logo" />
            </a>
          </div>
        </div>
      </div>

      {/* Google Review Section */}
      <div id="google-container" className="flex justify-center w-full gap-6 p-3 bg-white">
        <div id="google-text">
          <p className="text-xl">Your feedback matters!</p>
          <p className="text-xl font-bold">Review us on Google :)</p>
        </div>
        <img src={gColorLogo} alt="Google Color Logo" />
      </div>

      {/* Footer */}
      <div
        id="footer"
        className="relative flex items-end justify-center w-full bg-black"
      >
        <div className="relative w-72">
          {/* Amber rectangle (background) */}
          <div className="bg-amber-300 w-80 h-20 rounded-t-2xl mt-5 translate-x-[-15px]" />
          {/* White card (foreground) */}
          <div className="absolute bottom-0 z-10 flex flex-col items-center justify-center -translate-x-1/2 bg-white rounded-t-xl left-1/2 w-80 h-18">
            <p className="text-[9px]">Designed By</p>
            <img src={cclogo} alt="Code Canvas Logo" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
