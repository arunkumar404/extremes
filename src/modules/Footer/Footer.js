import React from 'react'
import styles from './Footer.module.css'
// import logo from '../../common/images/logoExtreme.png'
import {
  collectionsOptions,
  informationOptions,
  moreFooterOptions,
} from '../../constants'
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../../common/icons'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      {/* <img
        src={logo}
        alt='logo'
        style={{
          maxWidth: '200px',
          maxHeight: '35px',
          cursor: 'pointer',
        }}
      /> */}
      <div className={styles.footerListsContainer}>
        <div className={styles.optionsColumnContainer}>
          <p className={styles.optionsHeader}>COLLECTIONS</p>
          {collectionsOptions.map((item, i) => {
            return (
              <p key={i} className={styles.optionsItem}>
                {item}
              </p>
            )
          })}
        </div>
        <div className={styles.optionsColumnContainer}>
          <p className={styles.optionsHeader}>INFORMATION</p>
          {informationOptions.map((item, i) => {
            return (
              <p key={i} className={styles.optionsItem}>
                {item}
              </p>
            )
          })}
        </div>
        <div className={styles.optionsColumnContainer}>
          <div className={styles.columnContainerTopPart}>
            <p className={styles.optionsHeader}>MORE</p>
            {moreFooterOptions.map((item, i) => {
              return (
                <p key={i} className={styles.optionsItem}>
                  {item}
                </p>
              )
            })}
          </div>
          <div className={styles.columnContainerBottomPart}>
            <p className={styles.optionsHeader}>SOCIAL</p>
            <p
              className={styles.optionsItem}
              style={{ marginTop: '1rem', padding: 0 }}
            >
              Stay connected.
            </p>
            <div className={styles.icon_links_container}>
              <div style={{ height: '20px', width: '20px' }}>
                <InstagramIcon />
              </div>
              <div style={{ height: '20px', width: '20px' }}>
                <FacebookIcon />
              </div>
              <div style={{ height: '20px', width: '20px' }}>
                <TwitterIcon />
              </div>
              <div style={{ height: '20px', width: '20px' }}>
                <YoutubeIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.footerEndNote}>&copy; BLVCK 2024</p>
    </div>
  )
}

export default Footer
