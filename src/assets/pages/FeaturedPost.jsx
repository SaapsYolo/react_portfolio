import React from 'react'
import ProfilePic from '../images/IMG_2072.jpg'; // Adjust the path as necessary
import './featuredPost.css'; // Adjust the path as necessary

function FeaturedPost () {
  return (
    <section id="recent-x-post">
  <h5 style={{color:'black', textAlign:'center', fontSize:'18px', fontWeight:'500'}}>Featured Post</h5>
  <a href="https://x.com/SaapsYolo/status/1816085149164896724" target="_blank" class="fake-tweet">
    <div class="tweet-header">
      <img src={ProfilePic} alt="Profile picture"/>
      <div class="tweet-user">
        <strong>Siyabulela</strong>
        <span>@SaapsYolo</span>
      </div>
    </div>
    <p class="tweet-text" style={{ textAlign: 'left' }}>
      I think as a person trying to break into tech industry, 
      your portfolio is your CV. Regardless of your degree, 
      certificates, or being self taught.
    </p>
    <div class="tweet-footer" style={{ textAlign: 'left' }}>
      <span>02:16 PM · Jul 24, 2024</span>
    </div>
  </a>
</section>

  )
}

export default FeaturedPost;
