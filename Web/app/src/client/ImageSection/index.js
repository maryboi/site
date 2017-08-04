import React from 'react'
import PropTypes from 'prop-types'

import styles from './ImageSection.styles.scss'
import road from '../../static/images/road.jpg'

const ImageSection = props => {
  return (
    <section className={styles.Section}>
      <img className={styles.Image} src={road}></img>
      <div className={styles.Titles}>
        <h1 className={styles.Title}>Nuway.</h1>
        <h2 className={styles.SubTitle}>Expanding in a new way</h2>
      </div>
    </section>
  )
}

ImageSection.propTypes = {

}

export default ImageSection