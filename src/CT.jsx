import React from 'react'
import NavBar from './components/NavBar'
import Beams from './components/Beams'
import ProfileCard from './components/ProfileCard'
import shauryaImage from './images/Shaurya.jpeg'


const CT = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Background component that covers the full viewport */}
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100vh', 
          zIndex: -1 
        }}>
          <Beams
            beamWidth={2}
            beamHeight={25}
            beamNumber={34}
            lightColor="#ffffff"
            speed={10}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={46}
          />
        </div>
        
        {/* Navbar positioned above the background */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <NavBar/>
        </div>
        
        {/* Content area */}
        <div style={{ 
          position: 'relative', 
          zIndex: 1, 
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 100px)'
        }}>
        <ProfileCard
          name="Shaurya Sharma"
          title="Software Engineer"
          handle="shaurya_sharma27"
          status="Just Work" 
          contactText="Contact Me"
          avatarUrl={shauryaImage}
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => window.open('https://in.linkedin.com/in/shaurya-sharma-2ba105275', '_blank')}
        />
        </div>
    </div>
  )
}

export default CT