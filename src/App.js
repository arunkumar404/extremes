import styles from './App.module.css'
import { specialSaleCards } from './constants'
import Footer from './modules/Footer/Footer'
import Header from './modules/Header/Header'
import JustDropped from './modules/JustDropped/JustDropped'
import MainHeroPage from './modules/MainHeroPage/MainHeroPage'
import SpecialSaleCard from './modules/SpecialSaleCard/SpecialSaleCard'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MainHeroPage />
      <JustDropped />
      <div className={styles.specialSaleContainer}>
        {specialSaleCards.map( ( item, i ) => {
          return <SpecialSaleCard key={i} {...item} />
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default App
