import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Pages from "./components/Pages"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/pages/:id" element={ <Pages /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
