import React, { useState } from 'react'
import item1 from '../../common/images/men_item_1.webp'
import styles from './JustDropped.module.css'
import { AddIcon } from '../../common/icons'

const ItemSlider = ({ item }) => {
  const [showQuickAdd, setShowQuickAdd] = useState(false)

  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageNAdd}>
        <img
          src={item1}
          alt='item1'
          className={styles.itemImages}
          onMouseLeave={() => setShowQuickAdd(false)}
          onMouseEnter={() => setShowQuickAdd(true)}
        />
        <p
          className={`${styles.slidingQuickAdd} ${showQuickAdd && styles.showQuickAdd}`}
        >
          QUICK ADD
        </p>
      </div>
      <p className={styles.itemName}>Blvck Gradient Hoodie</p>
      <p className={styles.itemPrice}>Rs.11200.00</p>
      <p className={styles.newTag}>NEW</p>
    </div>
  )
}

export default ItemSlider
