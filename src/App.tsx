import { Outlet } from 'react-router-dom'
import { Header } from './components/layout/header'
import { Footer } from './components/layout/footer'

function App() {
  return (
    <div className="scrollbar  ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
