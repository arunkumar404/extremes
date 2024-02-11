import React from 'react'
import styles from './Header.module.css'
import { ProfileIcon, SearchIcon, CartIcon } from '../../common/icons'
import logo from '../../common/images/logoExtreme.png'
import { socialItems } from '../../constants'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAppContext } from '../../context'

const Header = ({ isScrolled, setIsScrolled }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const { setShowCart, showCart } = useAppContext()

  return (
    <div
      className={`${styles.header_container} ${
        ((location.pathname !== '/login' &&
          location.pathname !== '/signup' &&
          isScrolled) ||
        (location.pathname === '/login') ||
        (location.pathname === '/signup')) && styles.black_header
      }`}
    >
      <div className={styles.header_top_container}>
        <div className={styles.icon_links_container}>
          {socialItems.map((item, i) => {
            return (
              <a
                style={{ height: '20px', width: '20px' }}
                key={i}
                href={item.link}
                target='blank'
              >
                {item.icon}
              </a>
            )
          })}
        </div>
        <img
          src={logo}
          alt='logo'
          style={{
            maxWidth: '200px',
            maxHeight: '35px',
            cursor: 'pointer',
            marginLeft: '-2.5rem',
          }}
          onClick={() => {
            navigate('/')
          }}
        />
        <div className={styles.icon_links_container}>
          <div
            style={{ height: '20px', width: '20px', cursor: 'pointer' }}
            onClick={() => {
              setIsScrolled(true)
              navigate('/login')
            }}
          >
            <ProfileIcon />
          </div>
          <div style={{ height: '20px', width: '20px', cursor: 'pointer' }}>
            <SearchIcon />
          </div>
          <div style={{ height: '20px', width: '20px', cursor: 'pointer' }} onClick={() => {
            setShowCart(!showCart)
          }}>
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
