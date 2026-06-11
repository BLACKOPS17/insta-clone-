import React from 'react'
import b_logo from './assets/insta-text.webp' 

function Sidebar() {
  return (
       <div className="m-3 position-fixed d-flex flex-column justify-content-between vh-100">
  {/* Top Section */}
  <div className="d-flex flex-column gap-3">
    <img className="brand-name" src={b_logo} alt="image not found" />
    <div><i className="bi bi-house-door"></i> Home</div>
    <div><i className="bi bi-search"></i> Search</div>
    <div><i className="bi bi-compass"></i> Explore</div>
    <div><i className="bi bi-play-circle"></i> Reels</div>
    <div><i className="bi bi-chat-dots"></i> Messages</div>
    <div><i className="bi bi-heart"></i> Notifications</div>
    <div><i className="bi bi-plus-square"></i> Create</div>
    <div><i className="bi bi-person-circle"></i> Profile</div>
  </div>

  {/* Bottom Section */}
  <div className="d-flex flex-column gap-3 mb-3">
    <div><i className="bi bi-threads"></i> Threads</div>
    <div><i className="bi bi-list"></i> More</div>
  </div>
</div>

  )
}

export default Sidebar