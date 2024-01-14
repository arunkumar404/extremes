import React, { useState } from 'react'
import styles from './Collections.module.css'
import bg_img_2 from '../../common/images/bg_img_2.jpg'
import { useParams } from 'react-router-dom'
import { FilterIcon, RightArrowIcon } from '../../common/icons'
import { collectionItems, just_dropped_items } from '../../constants'
import CollectionItem from './CollectionItem'

const Collections = () => {
  const { category } = useParams()

  return (
    <div className={styles.collections_container}>
      <div
        className={styles.topBgPic}
        style={{ backgroundImage: `url(${bg_img_2})` }}
      >
        <p style={{ color: '#ffffff', fontSize: '4rem', fontWeight: 400 }}>
          Ready-to-Wear
        </p>
      </div>
      <div className={styles.filterNsort}>
        <div
          className={styles.btnIconContainer}
          style={{ borderRight: '1px solid #5a5959' }}
        >
          <button>FILTER</button>
          <div className={styles.iconDiv}>
            <FilterIcon />
          </div>
        </div>
        <div
          className={styles.btnIconContainer}
          style={{ borderLeft: '1px solid #5a5959' }}
        >
          <button>SORT</button>
          <div className={styles.iconDiv}>
            <RightArrowIcon />
          </div>
        </div>
      </div>

      <div className={styles.collectionItemsContainer}>
        {collectionItems.map((item, i) => {
          return <CollectionItem item={item} key={i} />
        })}
      </div>
    </div>
  )
}

export default Collections
