import React from 'react'
import Biography from '@/components/Biography'
import TechList from '@/components/TechList'
import Experience from '@/components/Experience'

// Tech items data
const techItems = [
  { tech_name: "React", tech_color: "#0a6ed1" },
  { tech_name: "Next.js", tech_color: "black" },
  { tech_name: "Node.js", tech_color: "green" },
  { tech_name: "Three.js", tech_color: "indigo" },
];

// Experience data
const experiencesData = [
  {
    title: "Frontend Developer",
    time_period: "March 2024 - July 2024",
    institution: "BizoAlly",
    description:
      "I worked on developing responsive and accessible UI components using React.js and Next.js. Collaborated with a backend team to implement RESTful APIs.",
  },
  {
    title: "Freelance Web Developer",
    time_period: "July 2024 - Present",
    institution: "Self-Employed",
    description:
      "Worked with various clients to create custom websites and web applications using React.js, Next.js, Node.js, Three.js etc. Delivered projects on time and improved client satisfaction.",
  },
];

//Education data
const educationData = [
  {
    title: "Bachelor of Technology (BTECH) in Artificial Intelligence and Machine Learning",
    time_period: "September 2023 - July 2027",
    institution: "GGSIPU",
    description:
      "Pursuing a comprehensive curriculum focused on AI and ML technologies, gaining hands-on experience with advanced algorithms, programming, and data analysis to build cutting-edge machine learning solutions.",
  },
  {
    title: "Senior Secondary Education",
    time_period: "2022",
    institution: "Kendriya Vidyalaya",
    description:
      "Completed senior secondary education with a strong foundation in science and mathematics, which laid the groundwork for higher studies in technology and AI development.",
  },
];


const page = () => {
  return (
    <div>
      <Biography 
        heading="About Me" 
        body="I am an ambitious and skilled frontend developer with a strong foundation in web development, machine learning, and the creation of intuitive, user-centered digital platforms. Over the past few years, I have gained extensive experience working with a variety of web technologies, including React.js, Next.js, Node.js, etc. allowing me to design and develop optimized, high-performing websites and applications across multiple industries.
        <br /><br />
        One of my core projects is MLBox, a no-code AI platform that enables users to generate machine learning models by simply providing datasets. For this project, I played a crucial role in developing the frontend using Next.js, focusing on delivering a seamless and user-friendly interface. By integrating RESTful APIs, I ensured smooth interactions between the frontend and backend, allowing users to easily upload datasets and receive machine learning model outputs. This project not only honed my skills in frontend development but also deepened my understanding of machine learning, bridging the gap between technology and accessibility.
        <br /><br />
        In addition to MLBox, I&apos;ve worked on GroyamD2C, an eCommerce platform where I used React.js for the frontend development and worked with RESTful APIs to integrate the backend. My focus for this project was to create a highly responsive and interactive shopping experience for users. I collaborated closely with backend developers to implement essential eCommerce features such as product listings, cart management, order processing, and payment gateway integration. My work ensured that users could enjoy a smooth and efficient shopping experience across all devices.
        <br /><br />
        I also developed SamacharVarta, a Hindi news website, where I utilized WordPress and Elementor to build a visually engaging and content-rich platform. Managing the hosting and domain using Hostinger, I ensured that the site performs optimally, offering readers up-to-date news in a user-friendly manner. This project is also part of my internship, where I gained valuable experience in content management, SEO optimization, and web hosting.
        <br /><br />
        Beyond my technical skills, I&apos;m the creator of ML4E, a platform designed to teach machine learning through comprehensive tutorials and resources. While ML4E initially started as a YouTube channel, I expanded it into a full-fledged website where users can access in-depth articles and guides. By leveraging my experience in React and web development, I built a clean and responsive interface that makes learning machine learning accessible to everyone.
        <br /><br />
        I&apos;ve also worked on a variety of paid freelance projects, delivering tailored solutions for clients, including custom-built websites and web applications. These projects have allowed me to refine my communication skills and strengthen my ability to translate client requirements into fully functional, scalable websites.
        <br /><br />
        My commitment to innovation extends to my personal portfolio website, which I developed using Three.js. This 3D interactive website showcases my projects and skills in a visually immersive way, blending creativity with technical precision.
        <br /><br />
        As I continue to grow as a developer, I am driven by my passion for learning new technologies, solving real-world problems, and delivering impactful user experiences. I am always looking for opportunities to contribute my skills to exciting projects and collaborate with teams that share my enthusiasm for innovation and technology."

        buttonLink="/Aayan_Khan_Resume.pdf" 
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