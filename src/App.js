import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'
import Qualification from './components/qualification/Qualification'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import Cursor from './components/cursor/Cursor'

function App() {
    return (
        <>
            <Cursor />
            <Header />
            <main className="main">
                <Home />
                <About />
                <Skills />
                <Work />
                <Qualification />
                <Contact />
            </main>

            <Footer />
            <ScrollUp />
        </>
    )
}

export default App
