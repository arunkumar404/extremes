import React, { useState } from 'react'
import styles from './JustDropped.module.css'
import { genderOptions } from '../../constants'

const GenderTab = () => {
  const [selectedGender, setSelectedGender] = useState('Men')
  return (
    <div className={styles.genderTab}>
      {genderOptions.map((item, i) => {
        return (
          <button
            onClick={() => setSelectedGender(item)}
            key={i}
            className={selectedGender === item && styles.activeTab}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

export default GenderTab
