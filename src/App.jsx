import { Routes, Route } from 'react-router-dom'
import './styles/theme.css'
import './App.css'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Day from './pages/Day'

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:name" element={<Destination />} />
        <Route path="/day/:date" element={<Day />} />
      </Routes>
    </div>
  )
}
