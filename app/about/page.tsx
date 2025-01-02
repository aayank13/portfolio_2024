import React from 'react'
import Biography from '@/components/Biography'
import TechList from '@/components/TechList'
import Experience from '@/components/Experience'
import { techItems, experiencesData, educationData } from '@/constants'


const page = () => {
  return (
    <div>
      <Biography 
        heading="About Me" 
        body="I am an ambitious and skilled web developer with a strong foundation in web development, machine learning, and the creation of intuitive, user-centered digital platforms. Over the past few years, I have gained extensive experience working with a variety of web technologies, including React.js, Next.js, Node.js, etc. allowing me to design and develop optimized, high-performing websites and applications across multiple industries.
        <br /><br />
        One of my core projects is MLBox, a no-code AI platform that enables users to generate machine learning models by simply providing datasets. For this project, I played a crucial role in developing the frontend using Next.js, focusing on delivering a seamless and user-friendly interface. By integrating RESTful APIs, I ensured smooth interactions between the frontend and backend, allowing users to easily upload datasets and receive machine learning model outputs. This project not only honed my skills in frontend development but also deepened my understanding of machine learning, bridging the gap between technology and accessibility.
        <br /><br />
        In addition to MLBox, I&apos;ve worked on GroyamD2C, an eCommerce platform where I used React.js for the frontend development and worked with RESTful APIs to integrate the backend. My focus for this project was to create a highly responsive and interactive shopping experience for users. I collaborated closely with backend developers to implement essential eCommerce features such as product listings, cart management, order processing, and payment gateway integration. My work ensured that users could enjoy a smooth and efficient shopping experience across all devices.
        <br /><br />
        I also developed SamacharVarta, a Hindi news website, where I utilized WordPress and Elementor to build a visually engaging and content-rich platform. Managing the hosting and domain using Hostinger, I ensured that the site performs optimally, offering readers up-to-date news in a user-friendly manner. This project is also part of my internship, where I gained valuable experience in content management, SEO optimization, and web hosting.
        <br /><br />
        Beyond my technical skills, I&apos;m the creator of ML4E, a platform designed to teach machine learning through comprehensive resources. Where users can access in-depth articles and guides. By leveraging my experience in React and web development, I built a clean and responsive interface that makes learning machine learning accessible to everyone.
        <br /><br />
        I&apos;ve also worked on a variety of paid freelance projects, delivering tailored solutions for clients, including custom-built websites and web applications. These projects have allowed me to refine my communication skills and strengthen my ability to translate client requirements into fully functional, scalable websites.
        <br /><br />
        My commitment to innovation extends to my personal portfolio website, which I developed using Three.js. This 3D interactive website showcases my projects and skills in a visually immersive way, blending creativity with technical precision.
        <br /><br />
        As I continue to grow as a developer, I am driven by my passion for learning new technologies, solving real-world problems, and delivering impactful user experiences. I am always looking for opportunities to contribute my skills to exciting projects and collaborate with teams that share my enthusiasm for innovation and technology."

        buttonLink="/Aayan-Resume.pdf" 
        buttonText="Resume" 
        avatar="/aayank_image.png"  
      />

      <br /><br />

      <TechList title="What I Use" techItems={techItems} />

      <br /><br />

      <Experience 
        heading="Experience"
        experiences={experiencesData}
      />

      <Experience 
        heading="Education"
        experiences={educationData}
      />
    </div>
  )
}

export default page