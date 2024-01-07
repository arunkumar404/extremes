import React from 'react'
import styles from './SpecialSaleCard.module.css'

const SpecialSaleCard = ({ sub, main, btns,bgImg }) => {
  return (
    <div
      className={styles.specialSaleCard}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={styles.messagesPart}>
        <p className={styles.subMessage}>{sub}</p>
        <p className={styles.subMain}>{main}</p>
        <div className={styles.btnsContainer}>
          {btns.map((item, i) => {
            return (
              <button key={i} className={styles.shop_btn}>
                {item}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SpecialSaleCard
