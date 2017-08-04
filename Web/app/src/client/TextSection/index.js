import React from 'react'
import PropTypes from 'prop-types'

import styles from './TextSection.styles.scss'

const TextSection = props => {
  return (
    <section className={styles.TextSection}>
      <h1 className={styles.Title}>
        Its not about manpower, but skillpower.
      </h1>
      <div className={styles.SubSections}>
        <div className={styles.SubSection}>
          <h2 className={styles.SubTitle}>Bra uppdragsgivare.</h2>
          <p>
            Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?
          </p>
        </div>
        <div className={styles.SubSection}>
          <h2 className={styles.SubTitle}>Utvecklande uppdrag.</h2>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          </p>
        </div>
      </div>
    </section>
  )
}

TextSection.propTypes = {

}

export default TextSection