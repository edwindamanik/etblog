import React from 'react'
import './Home.css'
import { Navbar, Jumbotron, Recent } from '../../components'

function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />

      {/* Posts */}
      <div className='recent_container'>
        <h4 className='recent_title'>Recent blog posts</h4>
        <Recent />
      </div>
    </>
  )
}

export default Home