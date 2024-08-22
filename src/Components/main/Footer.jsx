import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function footer() {
  return (
    <div>
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container text-center">
        <Link to={'/'} className='text'><p>© 2024 My Web App</p></Link>
        </div>
      </footer>
    </div>
  )
}

export default footer
