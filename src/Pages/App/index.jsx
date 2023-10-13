import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Contact from '../Contact'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/contact', element: <Contact /> },
        { path: '/*', element: <NotFound /> },

    ])
    return routes
}

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRoutes />   
        </BrowserRouter>
    )
}

export default App

