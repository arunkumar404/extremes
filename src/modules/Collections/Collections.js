import React from 'react'
import styles from './Collections.module.css'
import bg_img_2 from '../../common/images/bg_img_2.jpg'
import { useParams } from 'react-router-dom';

const Collections = () => {
  const {category} = useParams()
  
  return (
    <div className={styles.collections_container}>
      <div
        className={styles.topBgPic}
        style={{ backgroundImage: `url(${bg_img_2})`, minHeight:'400px' }}
      >
        <p style={{color: '#ffffff', fontSize: '4rem', fontWeight:400}}>Ready-to-Wear</p>
      </div>
    </div>
  )
}

export default Collections
