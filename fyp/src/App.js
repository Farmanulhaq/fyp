import React from 'react'
import "./App.css"
import {Article, Brand, Cta, Feature} from "./components"
import {About, Blog, Features, Footer} from "./containers"
const App = () => {
  return (
    <div>
      <About/>
      <Features/>
      <Brand/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App