import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SearchRecipe from './components/SearchRecipe'
import Display from './components/Display'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchRecipe />}>
      </Route>

      <Route path="/display" element={<Display />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App