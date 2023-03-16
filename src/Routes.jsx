import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import Landing from './pages/user/landing'

// creates routes and returns router object for app

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} > 
        <Route index element={<Home />} />
        <Route path='/landing' element={<Landing />} />

    </Route>
  )
)
export default router
