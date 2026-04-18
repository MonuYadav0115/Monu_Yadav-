import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { ThemeProvider } from './components/ThemeProvider'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Scroll } from 'lucide-react'
import { ScrollProgress } from './components/ScrollProgress'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import {Contact} from './components/Contact'
import { About } from './components/About'

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <NavBar />
        <ScrollProgress/>
        <main>
          <Hero />
          <Projects />
          <Skills/>
          <About/>
          <Contact/>
        </main>
        <Footer/>
        <BackToTop/>
      </div>
    </ThemeProvider>
  )
}

export default App