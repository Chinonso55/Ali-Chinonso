import { Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import Title from '../Components/Title'
import Form from '../Components/Form'

const Contact = () => {
  return (
    <section id='Contact'>
      <div className="container mt-25">
        <Title 
        title='Contact' 
        highlight='Me' 
        subtitle='Get in touch with me' 
        isCenter={false} 
        />

        <div className="md:grid md:grid-cols-2 md:gap-16">
          <Form />

          <div className='mb-16 mt-8'>
            <div className="mb-2 flex flex-wrap items-center justify-start gap-2"> 
                <Phone className="size-5" />
                <a className="text-lg font-semibold transition-colors duration-300 hover:text-blue-600" href="tel: 09163775870 ">
                    09163775870
                </a>
            </div>
            <div className="mb-2 flex flex-wrap items-center justify-start gap-2"> 
                <Mail className="size-5" />
                <a className="text-lg font-semibold transition-colors duration-300 hover:text-blue-600" href="mailto: alichinonso55@gmail.com">
                    alichinonso55@gmail.com
                </a>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-4">
                <a className='hover:-translate-y-2 hover:text-blue-600 transition-all ease-in-out duration-300' href='#'>
                    <Linkedin className='size-6'/>
                </a>
                <a className='hover:-translate-y-2 hover:text-blue-600 transition-all ease-in-out duration-300' href="#">
                    <Instagram className='size-6'/>
                </a>
                <a className='hover:-translate-y-2 hover:text-blue-600 transition-all ease-in-out duration-300' href="">
                    <Twitter className='size-6'/>
                </a>

            </div>
          </div>
            
        
        </div>
      </div>
    </section>
  )
}

export default Contact
