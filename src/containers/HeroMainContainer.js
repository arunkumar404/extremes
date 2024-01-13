import React from 'react'
import MainHeroPage from '../modules/MainHeroPage/MainHeroPage'
import JustDropped from '../modules/JustDropped/JustDropped'
import styles from '../App.module.css'
import { specialSaleCards } from '../constants'
import SpecialSaleCard from '../modules/SpecialSaleCard/SpecialSaleCard'

const HeroMainContainer = () => {
  return (
    <>
      <MainHeroPage />
      <JustDropped />
      <div className={styles.specialSaleContainer}>
        {specialSaleCards.map((item, i) => {
          return <SpecialSaleCard key={i} {...item} />
        })}
      </div>
    </>
  )
}

export default HeroMainContainer