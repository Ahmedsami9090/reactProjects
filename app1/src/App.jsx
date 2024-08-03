import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './components/Main/Main'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
function App() {
  const router = createBrowserRouter([
    {path: '', element: <Layout />, children:[
      {path:'', element: <Main />},
      {path: 'main', element: <Main />},
      {path: 'about', element: <About />},
      {path: 'portfolio', element: <Portfolio />},
      {path: 'contact', element: <Contact />}
    ]},
  ])
  return <>
      <RouterProvider router={router} />
    </>
  
}
export default App
