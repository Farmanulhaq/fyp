import React from 'react'
import "./App.css"
import {Article, Brand, Cta, Feature} from "./components"
import {About, Blog, Features, Team, Footer} from "./containers"
const App = () => {
  return (
    <div>
      <About/>
      <Features/>
      <Brand/>
      <Team/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App