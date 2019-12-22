import React from "react"
import NavHeader from '../components/nav-header'
import SEO from "../components/seo"

const SecondPage = () => (
  <>
    <SEO title="Contact" />
    <NavHeader current='contact'/> 
    <main className='contact-main'>
      <h1>Contact Me</h1>
      <form method="POST" action="https://formspree.io/lucas.dachman@gmail.com">
        <input className='email-input' type="email" name="email" placeholder="Your email" />
        <textarea className='email-msg-input' name="message" placeholder="Your Message"></textarea>
        <button className='button' type="submit">Send</button>
      </form>
    </main>
  </>
)

export default SecondPage
