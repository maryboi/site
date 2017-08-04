import React from 'react'
import PropTypes from 'prop-types'

import styles from './Footer.styles.scss'
import logo from '../../static/images/logo.png'

const Footer = props => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterOverlay}>
        <div className={styles.Content}>
          <h1 className={styles.Title}>We would love to hear from you.</h1>
          <a className={styles.Contact} href='tel:+46735244674'>+46 735 244 674</a>
          <a className={styles.Contact} href='mailto:info@nuway.se'>info@nuway.se</a>

          <div className={styles.Locations}>
            <div className={styles.Location}>
              <h2>Stockholm</h2>
              <p className={styles.Address}>Luntmakargatan 26</p>
            </div>
            <img className={styles.Logo} src={logo} />
            <div className={styles.Location}>
              <h2>Malmö</h2>
              <p className={styles.Address}>Engelbrektsgatan 12</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {

}

export default Footer