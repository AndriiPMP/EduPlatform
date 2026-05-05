import './App.css'
import '../src/components/page_space/page_space'
import Register_page from './pages/register_page/register_page'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <Route path='/login' element={<Register_page/>}/>
    </BrowserRouter>
  )
}

export default App