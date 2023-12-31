import React, { useState } from 'react'
import styles from './MainHeroPage.module.css'
import bg_img_1 from '../../common/images/bg_img_1.jpg'
import bg_img_2 from '../../common/images/bg_img_2.jpg'

import { LeftArrowIcon, RightArrowIcon } from '../../common/icons'

const MainHeroPage = () => {
  const [current, setCurrent] = useState(1)

  const heroData = [
    {
      itemId: 1,
      image: bg_img_1,
      smallHeader: 'READY-TO-WEAR',
      largeHeader: 'All Blvck Everything',
      buttons: ['SHOP MEN', 'SHOP WOMEN'],
    },
    {
      itemId: 2,
      image: bg_img_2,
      smallHeader: 'BLVCK HOME',
      largeHeader: 'Bring the lifestyle home.',
      buttons: ['SHOP THE COLLECTION'],
    },
  ]

  const handleClick = (direction) => {
    setCurrent(
      direction === 'left' ? (current === 1 ? 2 : 1) : current === 1 ? 2 : 1
    )
  }

  const getItem = (position) => {
    return heroData.find(
      (item) =>
        item.itemId ===
        (current === 1
          ? position === 'left'
            ? 2
            : 1
          : position === 'left'
          ? 1
          : 2)
    )
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {['left', 'center', 'right'].map((position) => (
        <div
          key={position}
          className={`${styles.slider_container_item} ${
            position === 'center' ? '' : styles.offscreen
          }`}
        >
          <div className={styles.slider_container_item}>
            <img
              src={getItem(position).image}
              alt={`bg_img_${getItem(position).itemId}`}
              className={styles.sliding_image}
            />
          </div>
          <div className={styles.message_container}>
            <div className={styles.gap_reducer}>
              <p className={styles.small_header}>
                {getItem(position).smallHeader}
              </p>
              <h1 className={styles.large_header}>
                {getItem(position).largeHeader}
              </h1>
            </div>
            <div className={styles.btn_container}>
              {getItem(position).buttons.map((btnName, i) => {
                return <button className={styles.shop_btn}>SHOP MEN</button>
              })}
            </div>
          </div>
        </div>
      ))}

      <div
        style={{
          height: '20px',
          width: '20px',
          position: 'absolute',
          left: '1.5%',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          zIndex: 1,
        }}
        onClick={() => handleClick('left')}
      >
        <LeftArrowIcon />
      </div>
      <div
        style={{
          height: '20px',
          width: '20px',
          position: 'absolute',
          right: '1.5%',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          zIndex: 1,
        }}
        onClick={() => handleClick('right')}
      >
        <RightArrowIcon />
      </div>
    </div>
  )
}

export default MainHeroPage
