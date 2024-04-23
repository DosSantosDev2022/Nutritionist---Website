import { Outlet } from 'react-router-dom'
import { Header } from './components/layout/header'
import { Footer } from './components/layout/footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

function App() {
  return (
    <div className="scrollbar  ">
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
