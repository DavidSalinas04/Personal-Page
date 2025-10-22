import React from 'react';
import Home from '../Components/Home.jsx';
import Navigation from '../Components/Navigation.jsx';
import AboutMe from '../Components/AboutMe.jsx';
import Experience from '../Components/Experience.jsx';
import Projects from '../Components/Projects.jsx';
import Skills from '../Components/Skills.jsx';
import Contact from '../Components/Contact.jsx';

export default function LandingPage() {
    return (
        <>
            <Navigation />
            <Home />
            <AboutMe />
            <Experience />
            <Projects />
            <Skills />
            <Contact />


        </>
    )
}


