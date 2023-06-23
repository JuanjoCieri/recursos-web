import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/home/Home"
import Resource from './pages/resource/Resource'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/:name"} element={<Resource />} />
    </Routes>
    </BrowserRouter>    
  )
}

export default App
