import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Code from './pages/Code'

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Code />} />
          <Route path='/home' element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App
