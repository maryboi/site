import React from 'react'
import PropTypes from 'prop-types'

import styles from './TextAndImageSection.styles.scss'

import bike from '../../static/images/bike.jpg'
import stars from '../../static/images/stars.jpg'
import road from '../../static/images/road.jpg'
import ios from '../../static/images/ios.jpg'


const TextAndImageSection = props => {
  return (
    <section className={styles.TextAndImageSection}>
      <div className={styles.Bike}>
        <div>
          <div className={styles.Project}>
            <h1 className={styles.Title}>Leading us retail store</h1>
            <p>
              Using the mobile device to ensure that the endusers get the best prices possible. Using camera, OCR and advanced data management to ensure the enduser to get cash refund and the provider to get customer knowledge. Outsourced assignment to one of the worlds most successful and largest enterprises.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.Stars}>
        <div className={styles.Project}>
          <h1 className={styles.Title}>HW/SW projects</h1>
          <p>
            Several HW projects where both the HW and the supporting SW were delivered as turnkey solutions to different companies. Bluetooth integration in add-on units giving Bluetooth support in early stages. Wireless support built into medical devices e.g. inhalators, injectors or dispensers giving the patients and doctors control of the drug intake.
          </p>
        </div>
      </div>
      <div className={styles.Ios}>
        <div className={styles.Project}>
          <h1 className={styles.Title}>Development</h1>
          <p>
            Development projects for a high tech image handling company that are working both with HW and SW delivering to a mass market. Development for the largest provider of Digital Signage and customised monitors in Northern Europe. Market segments are segments banking, retail, industry, transportation, government and gaming.
          </p>
        </div>
      </div>
      <div className={styles.News}>
        <div className={styles.Project}>
          <h1 className={styles.Title}>Lorem Ipsum</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>
    </section>
  )
}

TextAndImageSection.propTypes = {

}

export default TextAndImageSection