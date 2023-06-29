import React from 'react';
import './Jumbotron.css'

const Jumbotron = () => {
  return (
    <div className='jumbotron_container'>
      <h1>Inside Design: Stories and interviews</h1>
      <p>Subscirbe to learn about new product features, the latest in technology, and updates.</p>
      <div className="email_subscribe">
        <form>
          <input type="email" placeholder='Enter your email' required />
          <button type='submit'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Jumbotron