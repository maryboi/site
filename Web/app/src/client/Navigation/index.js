import React from 'react'
import PropTypes from 'prop-types'

import styles from './Navigation.styles.scss'
import logo from '../../static/images/logo.png'

const Navigation = props => {
  
  const hasBackground = props.shouldHaveBackground ? ` ${styles.hasBackground}` : ''
  const navClasses = `${styles.Navigation}${hasBackground}`

  return (
    <nav className={navClasses}>
      <img className={styles.Logo} src={logo}/>
      <ul className={styles.NavigationList}>
        <li className={styles.NavigationListItem}>
          <a href='#'>Start</a>
        </li>
        <li className={styles.NavigationListItem}>
          <a href='#'>Tjänster</a>
        </li>
        <li className={styles.NavigationListItem}>
          <a href='#'>Om oss</a>
        </li>
        <li className={styles.NavigationListItem}>
          <a href='#'>Kontakt</a>
        </li>
      </ul>
    </nav>
  )
}

Navigation.propTypes = {

}

export default Navigation