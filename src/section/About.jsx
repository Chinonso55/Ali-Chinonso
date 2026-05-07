import NonsoImg from '../assets/Nonso2.jpeg'
import Title from '../Components/Title';

const About = () => {
  return (
    <section id="About" className="pt-32">
      <div className="container">
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
            <div className="mb-8 md:mb-0 ">
                <img
                className="object-cover h-[350px] w-full rounded-2xl" 
                src={NonsoImg} 
                alt="About Image" 
                />
            </div>
            <div className="">
                <Title title='About' highlight='Me' subtitle='Get To Know Me Better' isCenter = {false} />
                <p className="text-gray-300 leading-7">Hey there! i'm Ali Chinonso, a passionate frontend developer with a keen eye for detail and a love for creating smooth, user-friendly experiences with 4 years of experience, i specialize in React, and TailwindCSS, bringing modern and scalable solutions to life. i'm a detail-oriented and organized individual with a strong passion for creating visually appealing and user friendly experiences. i'm always eager to learn about new technologies and best practices, and i'm excited about the opportuniy to share my knowledge and skills with others.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About;
