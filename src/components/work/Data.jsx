import Work1 from '../../assets/work1.png'
import Work2 from '../../assets/work2.jpg'
import Work3 from '../../assets/work3.jpg'
import Work4 from '../../assets/work4.jpg'
import Work5 from '../../assets/work5.jpg'

export const projectsData = [
    {
        id: 5,
        image: Work5,
        title: 'E-commerce website',
        category: 'web',
        description: "A user-friendly online platform allowing customers to register, browse products, add items to their cart and manage orders. "+"Built with TypeScript, React and TailwindCSS.",
        url: "https://typescript-comfy-store.netlify.app/"
    },
    {
        id: 2,
        image: Work2,
        title: 'Image Gallery App',
        category: 'app',
        description: "A dynamic image gallery application that allows users to log in, upload images, and interact with a user-friendly interface.",
        url: "https://gallery-one.netlify.app/"
    },{
        id: 1,
        image: Work1,
        title: 'Weather App',
        category: 'app',
        description: "A weather app that enables users to check the weather currently and in the next five days.",
        url: 'https://siwi0w0.github.io/weather-app/',
    },
    {
        id: 3,
        image: Work3,
        title: 'Country Information Retrieval System',
        category: 'app',
        description: "A web application that enables users to input a country name, initiating a seamless flow of data retrieval and presentation.",
        url: "https://countries-wiki-frontend.vercel.app/"
    },

    {
        id: 4,
        image: Work4,
        title: 'International Student Support Platform',
        category: 'design',
        description: "A user-friendly web design which will provide international students with the support and resources they need to succeed.",
        url: "https://www.figma.com/file/VZfr86QsNVo6ezVhS8Jvth/GlobalCampusIE-(Community)"
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
