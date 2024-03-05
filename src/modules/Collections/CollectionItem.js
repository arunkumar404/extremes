import React, { useState } from 'react'
import styles from './Collections.module.css'
import item1 from '../../common/images/men_item_1.webp'
import { LeftLongArrowIcon } from '../../common/icons/LeftLongArrowIcon'
import { useAppContext } from '../../context'
import { useNavigate } from 'react-router-dom'

const CollectionItem = ({ buyingItem }) => {
  const [showQuickAdd, setShowQuickAdd] = useState(false)
  const [showSizeRise, setShowSizeRise] = useState(false)
  const navigate = useNavigate()
  const { setCartItems } = useAppContext()
  console.log(buyingItem)
  return (
    <div
      className={styles.itemContainer}
      onClick={() =>
        navigate(
          `/collections/men/products/${buyingItem.name
            .toLowerCase()
            .split(' ')
            .join('-')}?id=${buyingItem.id}`
        )
      }
    >
      <div className={styles.imageNAdd}>
        <img
          src={buyingItem?.image}
          alt={buyingItem?.name}
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
                          img: buyingItem?.image,
                          pricePerPiece: buyingItem?.price,
                          count: 1,
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
      <p className={styles.itemName}>{buyingItem?.name}</p>
      <p className={styles.itemPrice}>{buyingItem?.price}</p>
      <p className={styles.newTag}>NEW</p>
    </div>
  )
}

export default CollectionItem
