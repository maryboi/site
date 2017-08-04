import React from 'react'
import styles from './App.scss'

import Navigation from './Navigation'
import ImageSection from './ImageSection'
import TextSection from './TextSection'
import TextAndImageSection from './TextAndImageSection'
import Coworkers from './Coworkers'
import Footer from './Footer'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > 350)
      this.setState({
        hasScrolled: true
      })
    else
      this.setState({
        hasScrolled: false
      })
  }

  render() {
    return (
      <div>
        <Navigation shouldHaveBackground={this.state.hasScrolled} />
        <ImageSection />
        <TextSection />
        <TextAndImageSection />
        <Coworkers />
        <Footer />
      </div >
    )
  }
}