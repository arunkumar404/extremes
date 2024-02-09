import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Footer from './modules/Footer/Footer'
import Header from './modules/Header/Header'
import { Route, Routes } from 'react-router-dom'
import HeroMainContainer from './containers/HeroMainContainer'
import LoginPage from './modules/Auth/LoginPage'
import SignupPage from './modules/Auth/SignupPage'
import Collections from './modules/Collections/Collections'
import { ContextProvider } from './context'
import { Button } from './components/ui/button'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsScrolled(offset > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.app}>
      <ContextProvider>
        <Header isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
        <Routes>
          <Route
            path='/'
            element={<HeroMainContainer setIsScrolled={setIsScrolled} />}
          />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/collections/:category' element={<Collections />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </div>
  )
}

export default App
