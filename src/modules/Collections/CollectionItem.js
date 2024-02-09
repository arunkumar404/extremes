import React, { useState } from 'react'
import styles from './Collections.module.css'
import item1 from '../../common/images/men_item_1.webp'
import { LeftLongArrowIcon } from '../../common/icons/LeftLongArrowIcon'
import { useAppContext } from '../../context'

const CollectionItem = ({ buyingItem }) => {
  const [showQuickAdd, setShowQuickAdd] = useState(false)
  const [showSizeRise, setShowSizeRise] = useState(false)

  const { setCartItems } = useAppContext()

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
        {showQuickAdd && (
          <p
            className={`${styles.slidingQuickAdd} ${
              showQuickAdd && styles.showQuickAdd
            }`}
            onMouseEnter={() => setShowQuickAdd(true)}
            onMouseLeave={() => setShowQuickAdd(false)}
            onClick={() => {
              setShowSizeRise(true)
              setShowQuickAdd(false)
            }}
          >
            QUICK ADD
          </p>
        )}
        {showSizeRise && (
          <div
            className={`${styles.slidingQuickAdd} ${
              showSizeRise && styles.showQuickAdd
            } ${showSizeRise && styles.sizeContainerParent}`}
          >
            <div className={styles.sizeContainer}>
              <div onClick={() => setShowSizeRise(false)}>
                <LeftLongArrowIcon color='#000000' width={20} height={20} />
              </div>
              <p
                className={styles.selectPart}
                onMouseEnter={() => setShowQuickAdd(true)}
                onMouseLeave={() => setShowQuickAdd(false)}
                onClick={() => setShowSizeRise(true)}
              >
                SELECT SIZE
              </p>
            </div>
            <div className={styles.sizesActualContainer}>
              {['XL', 'S', 'M', 'L', 'XL', '2XL', '3XL'].map((itemSize, i) => {
                return (
                  <span
                    className={styles.sizeSpan}
                    key={i}
                    onClick={() => {
                      setCartItems((prev) => [
                        ...prev,
                        {
                          id: buyingItem?.id,
                          name: buyingItem?.name,
                          size: itemSize,
                        },
                      ])
                      setShowSizeRise(false)
                    }}
                  >
                    {itemSize}
                  </span>
                )
              })}
            </div>
          </div>
        )}
      </div>
      <p className={styles.itemName}>Blvck Gradient Hoodie</p>
      <p className={styles.itemPrice}>Rs.11200.00</p>
      <p className={styles.newTag}>NEW</p>
    </div>
  )
}

export default CollectionItem
