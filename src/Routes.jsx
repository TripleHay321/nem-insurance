import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
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

    </Route>
  )
)
export default router
