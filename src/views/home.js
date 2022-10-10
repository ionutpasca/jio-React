import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>jio</title>
        <meta property="og:title" content="jio" />
      </Helmet>
    </div>
  )
}

export default Home
