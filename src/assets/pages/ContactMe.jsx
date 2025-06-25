import React from 'react'
import './Styling.css';

function ContactMe () {
  return (
  <div className="contactMeSection" id="ContactMeSection">
        <div className="introSection">
            <div className="logo">
                Siya.Dev
            </div>
            <p>
                a software developer, web developer, ui/ux designer
            </p>
        </div>

        <div className="secondSection">
            <div className="leftSection">
                <div className="usefulLinks">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#MyBio">Bio</a></li>
                        <li><a href="#">My Work</a></li>
                        <li><a href="#SkillsAndEducation">Education & Skills</a></li>
                    </ul>
                    <a target="_blank" href="https://icons8.com">Icons by Icons8</a>
                </div>
                <div className="socials">
                    <h3>Social</h3>
                    <div className="iconsDiv">
                        <ul>
                            <li><a href="https://x.com/saapsyolo" target="_blank">X (formaly known as Twitter)</a></li>
                            <li><a href="https://www.linkedin.com/in/siyabulela-biyo-a50b97206" target="_blank">LinkedIn</a></li>
                            <li><a href="">Discord</a></li>
                            <li><a href="">YouTube</a></li>
                            <li><a href="https://github.com/saapsyolo" target="_blank">Github</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="rightSection">
                <h3>
                    Send Me An Email
                </h3>
                <form action="https://formsubmit.co/siya.biyo.bongi@gmail.com" method="POST">
                    <label htmlFor="Subject">Name</label>
                    <input type="text" name="name" placeholder="John Doe"/>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" placeholder="john.doe@example.com" required/>
                    <label htmlFor="Message">Message</label>
                    <textarea id="" name="message" placeholder="your message" required></textarea>
                    <br/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_next" value="https://saapsyolo.netlify.app"/>
                    <button type="submit" id="SubmitButton">Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default ContactMe;