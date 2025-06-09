import Hero from "../images/Hero.mp4"

const HeroComponent = () => {
    return (
        <div className="absolute inset-0 w-full h-full">
            <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop
                playsInline={true}
            >
                <source src={Hero} type="video/mp4" />
            </video>
        </div>
    )
}

export default HeroComponent 