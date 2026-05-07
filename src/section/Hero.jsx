import HeroImg from '../assets/hero-image.png';

const Hero = () => {
  return <section id= 'Home'>
    <div className= "z-40">
        <div className="container h-screen flex items-center justify-center text-center">
            <div className="max-w-[800px] mx-auto">
                <div className="mb-6">
                    {/* Image */}
                    <img className="size-[100px] rounded-full mx-auto bg-gradient-to-r from-blue-600 to-purple-600 object-cover" src={HeroImg} alt="Hero image" />
                </div>
                {/* Content */}
                <div>
                    <h1 className="mb-2 text-3xl font-extrabold capitalize leading-1.2 md:text-5xl ">
                        Crafting {' '}
                        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                            Smooth
                        </span> Web Experiences
                    </h1>
                    <p className="mb-4 md:text-lg">I craft beautiful and functional web experiences that engage users and bring ideas to life. Let's build something amazing together!</p>
                    <a className="text-lg text-white font-semibold rounded-md inline-block capitalize px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600" href="#Projects">view my work</a>
                </div>
            </div>

        </div>
    </div>
  </section>
};

export default Hero;
