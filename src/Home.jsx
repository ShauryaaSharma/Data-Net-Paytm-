import NavBar from './components/NavBar'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Particles from './components/Particles';
import TextPressure from './components/TextPressure';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Home = () => {

    useGSAP(() => {
        // First animation - "Data is Everywhere" (disappears after animation)
        gsap.fromTo('#data-is-everywhere', {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power2.out"
        }).then(() => {
            gsap.to('#data-is-everywhere', {
                opacity: 0,
                duration: 1,
                delay: 0.5
            })
        })

        // Second animation - "We give YOU the power to make sense of it" (disappears after animation)
        gsap.fromTo('#data-net-gives-you-the-power', {
            opacity: 0,
            y: 150
        }, {
            opacity: 1,
            y: -50,
            duration: 2,
            delay: 2.5,
            ease: "power2.out"
        }).then(() => {
            gsap.to('#data-net-gives-you-the-power', {
                opacity: 0,
                duration: 1,
                delay: 0.5
            })
        })

        // Third animation - "Welcome to" (disappears after animation)
        gsap.fromTo('#welcome', {
            opacity: 0,
            y: 200
        }, {
            opacity: 1,
            y: -100,
            duration: 2,
            delay: 5,
            ease: "power2.out"
        }).then(() => {
            gsap.to('#welcome', {
                opacity: 0,
                duration: 1,
                delay: 0.5
            })
        })

        // Fourth animation - "Data Net" (stays visible)
        gsap.fromTo('#data-net', {
            opacity: 0,
            y: 250
        }, {
            opacity: 1,
            y: -200,
            duration: 3,
            delay: 7.5,
            ease: "power2.out"
        })

        // Scroll indicator animation (appears after all text animations)
        gsap.fromTo('#scroll-indicator', {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 10, // Appears after all text animations complete
            ease: "power2.out"
        })

        // Continuous bounce animation for scroll indicator
        gsap.to('#scroll-indicator', {
            y: -10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: 11
        })
    }, [])

    return (
    <div className="relative w-full h-screen">
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={10}
          speed={1.5}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className='absolute top-0 left-0 right-0 z-30 bg-transparent'>
        <NavBar />
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20'>
        <p id='data-is-everywhere' className='text-7xl font-bold'>Data is Everywhere</p>
        <p id='data-net-gives-you-the-power' className='text-7xl font-bold'> We give YOU the power to make sense of it</p>
        <p id='welcome' className='text-7xl font-bold'>Welcome to</p>
        <p id='data-net'>
        <div style={{position: 'relative', height: '300px'}}>
          <TextPressure
            text="DATA NET"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div id='scroll-indicator' className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-0 z-20'>
        <div className='flex flex-col items-center space-y-2'>
          <span className='text-sm font-light tracking-wider'>SCROLL FOR MORE</span>
          <div className='w-6 h-10 border-2 border-white rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-white rounded-full mt-2 animate-pulse'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home