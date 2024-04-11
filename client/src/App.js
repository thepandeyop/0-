import React ,{useEffect,useState} from 'react'
import "./App.css"
import Header from './components/Header/Header'
import Hero from './components/UI/Hero'
import Footer from './components/Footer/Footer'
import FieldSelection from './components/UI/FieldSection'
const App = () => {
  const [theme,seTheme] = useState('')
  const toggleTheme = () =>{
    theme=== '' ? seTheme('light-theme'): seTheme('')
  }
  useEffect(()=>{
    document.body.className = theme
  },[theme])
  return (
    <>
 <Header theme = {theme} toggleTheme={toggleTheme}/>
 <Hero theme = {theme}/>
 <FieldSelection/>
 
 <Footer/>
    </>
 
  )
}

export default App
