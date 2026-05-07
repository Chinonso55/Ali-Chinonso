import React from 'react'
import Title from '../Components/Title'
import { skills } from '../assets/constant';

const Skills = () => {
  return (
    <section id='Skills' className="pt-32">
      <div className="container">
        <Title 
        title='My' 
        highlight='Skills' 
        subtitle="Here Are Some Of The Technologies i've Worked With Recently" 
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
            {skills.map((skill) => (
                <div key={skill.id} className="flex items-center gap-4 flex-col lg:items-end">
                    <img className="size-12 hover:-translate-y-2 transition-transform duration-500 ease-in-out md:size-16 items " 
                    src={skill.icon} 
                    alt={skill.name} 
                    />
                    <span className="font-bold">{skill.name}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
