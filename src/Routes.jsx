import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './App'
import AdminLogin from './pages/admin/adminLogin'
import Home from './pages/Home'
import StaffLogin from './pages/staff/staffLogin'
import Landing from './pages/user/landing'
import PrintForm from './pages/user/printForm'
import Register from './pages/user/register'

// creates routes and returns router object for app

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} > 
        <Route index element={<Home />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/userSignUp' element={<Register />} />
        <Route path='/printForm' element={<PrintForm />} />
        <Route path='/staffLogin' element={<StaffLogin />} />
        <Route path='/adminLogin' element={<AdminLogin />} />

    </Route>
  )
)
export default router
