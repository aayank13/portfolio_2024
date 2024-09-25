import Biography from '@/components/Biography'
import React from 'react'

const page = () => {
  return (
    <div>
      <Biography 
        heading="About Me" 
        body="Hi, I’m Aayan Khan, a passionate web developer with a strong focus on creating immersive digital experiences. With expertise in React.js, Next.js, and Three.js, I specialize in building intuitive user interfaces and dynamic websites that are not only functional but also visually engaging.
        <br /> <br />
        Currently, I’m working on projects like MLBox, a no-code AI platform enabling users to generate machine learning models effortlessly, and GroyamD2C, an eCommerce platform where I've honed my skills integrating React.js with RESTful APIs. Alongside these, I’m also managing SamacharVarta, a Hindi news website, where I’ve handled WordPress development, hosting, and design optimizations.
        <br /> <br />
        I'm always eager to learn and explore new technologies, pushing boundaries to deliver modern and scalable solutions. Whether it's in frontend development, machine learning integration, or crafting 3D interfaces, I thrive on bringing creative ideas to life." 
        buttonLink="mailto:aayankhan1306@gmail.com" 
        buttonText="Contact Me" 
        avatar="/aayank_image.png"  />
    </div>
  )
}

export default page