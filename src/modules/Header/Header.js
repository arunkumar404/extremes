import React from 'react'
import styles from './Header.module.css'
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  ProfileIcon,
  SearchIcon,
  CartIcon,
} from '../../common/icons'
import logo from '../../common/images/logoExtreme.png'

const Header = () => {
  return (
    <div class={styles.header_container}>
      <div className={styles.header_top_container}>
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
        <img
          src={logo}
          alt='logo'
          style={{
            maxWidth: '200px',
            maxHeight: '35px',
            cursor: 'pointer',
          }}
        />
        <div className={styles.icon_links_container}>
          <div style={{ height: '20px', width: '20px' }}>
            <ProfileIcon />
          </div>
          <div style={{ height: '20px', width: '20px' }}>
            <SearchIcon />
          </div>
          <div style={{ height: '20px', width: '20px' }}>
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
