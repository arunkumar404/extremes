import React from 'react'
import styles from './JustDropped.module.css'
import GenderTab from './GenderTab'
import ItemSlider from './ItemSlider'
import { just_dropped_items } from '../../constants'

const JustDropped = () => {

  return (
    <div className={styles.just_dropped_container}>
      <p className={styles.header}>Just Dropped</p>
      <GenderTab />
      <div className={styles.slider_items_container}>
        {just_dropped_items.map( ( item, i ) => {
          return <ItemSlider key={i} item={item} />
        })}
      </div>
    </div>
  )
}

export default JustDropped
