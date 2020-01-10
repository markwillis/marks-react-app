import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Thanks for visiting.</h3>
        <p>Built with React.js using icanhazdadjoke API © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer