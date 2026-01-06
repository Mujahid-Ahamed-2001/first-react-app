import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/contact'

function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
       </Router>
    </>
  )
}

export default App
