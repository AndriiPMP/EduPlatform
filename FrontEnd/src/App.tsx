import './components/page_space/page_space'
import ProtectedRoute from './script/ProtectedRoute'
import Register_page from './pages/register_page/register_page'
import Setting_page from './pages/settings_page/settings_page'
import Login_page from './pages/login_page/login_page'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route element={<ProtectedRoute />}>
          <Route index element={<Setting_page/>}/>
        </Route>
        <Route path='/register' element={<Register_page/>}/>
        <Route path='/login' element={<Login_page/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App