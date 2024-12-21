import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Components/Header'
import Home from './Page/Home'
import Results from './Page/Results'

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/results" element={<Results/>} />
    </Routes>
    </>
  )
}

export default App
