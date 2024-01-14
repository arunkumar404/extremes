import React, { useState } from 'react'
import styles from './Collections.module.css'
import item1 from '../../common/images/men_item_1.webp'

const CollectionItem = ( { item } ) => {
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
          className={`${styles.slidingQuickAdd} ${
            showQuickAdd && styles.showQuickAdd
          }`}
          onMouseEnter={() => setShowQuickAdd(true)}
          onMouseLeave={() => setShowQuickAdd(false)}
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

export default CollectionItem