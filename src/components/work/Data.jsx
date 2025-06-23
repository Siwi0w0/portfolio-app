import Work1 from '../../assets/work1.png'
import Work2 from '../../assets/work2.jpg'
import Work3 from '../../assets/work3.jpg'
import Work4 from '../../assets/work4.jpg'
import Work5 from '../../assets/work5.jpg'
import Work6 from '../../assets/Work6.png'
import Work7 from '../../assets/Work7.png'

export const projectsData = [
    {
        id: 7,
        image: Work7,
        title: 'Toweel: an AI-powered mental health tool',
        category: 'app',
        description: "Toweel is an intelligent emotion analysis tool developed for the AI in Action Hackathon.",
        fulldescription: ["Developed during Google's AI in Action Hackathon, Toweel is an intelligent emotion analysis app that helps users identify and reflect on their feelings through natural language input. The app integrates LLM-powered emotion detection with a visually engaging frontend.", "I led the frontend development using React, TailwindCSS, and Framer Motion, creating an interactive Emotion Wheel, animated Emotion Cards, and a downloadable insight report. The system applies the Valence-Arousal emotional model to guide emotional visualization and user interaction."],
        url: "https://toweel-frontend.web.app/",
        technologies: ['React', 'JavaScript', 'Redux-toolkit', 'Firebase', 'Web-Speech-API', 'Framer-motion', 'React-pdf-API']
    },{
        id: 6,
        image: Work6,
        title: 'Deep Work Productivity Tool',
        category: 'app',
        description: "A productivity tool based on Deep Work theory, enable users to manage their time in a more efficient way.",
        fulldescription:["This productivity tool is built on the Deep Work theory, helping users manage their time more effectively by fostering focused, distraction-free work periods. It enables users to organize and track their tasks, setting aside dedicated blocks of time for deep, meaningful work.", "Key Features:", "  - Time Block Management: Easily create, edit, and organize your daily work blocks for maximum focus.", "  - Seamless State Management: Utilized Redux to manage and update time blocks effortlessly, ensuring smooth user experience across the app."],
        url: "https://deeeep.art/",
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Redux-toolkit', 'Fullcalendar-API']
    },{
        id: 5,
        image: Work5,
        title: 'E-commerce website',
        category: 'web',
        description: "An online platform allowing customers to register, browse products, add items to their cart and manage orders.",
        fulldescription: ["An intuitive online platform designed for seamless shopping experiences. Customers can easily register, browse through a wide range of products, add items to their cart, and manage their orders with minimal effort. The platform ensures smooth navigation and a responsive interface, making it accessible on any device."],
        url: "https://typescript-comfy-store.netlify.app/",
        technologies: ['TypeScript', 'React', 'TailwindCSS', 'Netlify']
    },
    {
        id: 2,
        image: Work2,
        title: 'Gallery App',
        category: 'app',
        description: "A dynamic image gallery application that allows users to log in, upload images, and interact with a user-friendly interface.",
        fulldescription:["A dynamic and interactive image gallery application where users can securely log in, upload their images, and interact with a sleek, user-friendly interface. This app makes it easy to browse and share images with others, providing a seamless experience for managing personal galleries."],
        url: "https://gallery-one.netlify.app/",
        technologies: ['React', 'MongoDB', 'CSS3', 'Firebase']
    },{
        id: 1,
        image: Work1,
        title: 'Weather App',
        category: 'app',
        description: "A weather app that enables users to check the weather currently and in the next five days.",
        fulldescription:["A weather app that enables users to check the weather currently and in the next five days."],
        url: 'https://siwi0w0.github.io/weather-app/',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API']
    },
    {
        id: 3,
        image: Work3,
        title: 'Country Information Retrieval System',
        category: 'app',
        description: "A web application that enables users to input a country name, initiating a seamless flow of data retrieval and presentation.",
        fulldescription:["A web application that enables users to input a country name, initiating a seamless flow of data retrieval and presentation."],
        url: "https://countries-wiki-frontend.vercel.app/",
        technologies: ['React', 'REST API', 'CSS3', 'Vercel']
    },

    {
        id: 4,
        image: Work4,
        title: 'International Student Support Platform',
        category: 'design',
        description: "A user-friendly web design which will provide international students with the support and resources they need to succeed.",
        fulldescription:["A user-friendly web design which will provide international students with the support and resources they need to succeed."],
        url: "https://www.figma.com/file/VZfr86QsNVo6ezVhS8Jvth/GlobalCampusIE-(Community)",
        technologies: ['Figma', 'UI/UX Design', 'Prototyping']
    },

]

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
    {
        name: 'design',
    },
]
