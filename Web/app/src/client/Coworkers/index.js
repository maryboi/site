import React from 'react'
import PropTypes from 'prop-types'

import styles from './Coworkers.styles.scss'

import tomas from '../../static/images/tomas.jpg'
import fredrik from '../../static/images/fredrik.jpg'
import philip from '../../static/images/philip.jpg'

const Coworkers = props => {
  return (
    <section className={styles.CoworkersSection}>
      <h1 className={styles.Title}>Vilka är vi?</h1>
      <div className={styles.Coworkers}>
        <div className={styles.Coworker}>
          <div className={styles.ImageContainer}>
            <img src={tomas} />
            <h2 className={styles.CoworkerTitle}>Tomas Fiedler</h2>
            <h3 className={styles.CoworkerRole}>Co-founder / Chairman of the board</h3>
            <p className={styles.CoworkerText}>
              Tomas Fiedler has been an entreprenuer since his early thirties. The first company that he co-founded turned out to be the most successful so far, however several new projects are looking to become even better. 
            </p>
          </div>
        </div>

        <div className={styles.Coworker}>
          <div className={styles.ImageContainer}>
            <img src={fredrik} />
            <h2 className={styles.CoworkerTitle}>Fredrik Tingvall</h2>
            <h3 className={styles.CoworkerRole}>Co-founder / CEO</h3>
            <p className={styles.CoworkerText}>
              Nullam ut bibendum ante. Sed volutpat in sapien vitae volutpat. Praesent nibh ligula, pulvinar non consectetur ut, elementum vitae tortor. Praesent ornare blandit odio, ac laoreet lorem scelerisque at. 
            </p>
          </div>
        </div>

        <div className={styles.Coworker}>
          <div className={styles.ImageContainer}>
            <img src={philip} />
            <h2 className={styles.CoworkerTitle}>Philip Svensson</h2>
            <h3 className={styles.CoworkerRole}>Area manager Stockholm</h3>
            <p className={styles.CoworkerText}>
              Philip Svensson is a sales professional with over 15 years total experience working with sales. The last 6 of them working in the highly competitive IT-consultancy market in Stockholm.
            </p>
          </div>
        </div>
      </div>
      <a className={styles.CtaLink} href='#'>Se alla medarbetare</a>
    </section>
  )
}

Coworkers.propTypes = {

}

export default Coworkers
