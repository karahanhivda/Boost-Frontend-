import React from 'react'

const Iletisim = () => {
  return (
    <div className='contact'>
        <h3>Contact Us!</h3>
        <div className="contact-info">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20145.48425608381!2d4.291891174316415!3d50.864764900000026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.    1!3m3!1m2!1s0x47c3c3e9561a7e9b%3A0x7db4a0479d270dc7!2sBelgian%20Chocolate%20Village%20Museum!5e0!3m2!1str!2str!4v1721478114779!5m2!1str!2str" width="1000"     height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <p><strong>Phone:</strong> <a href="tel:+1234567890">+123 456 7890</a></p>
            <p><strong>Email:</strong> <a href="mailto:magicrecipes@recipes.com">magicrecipes@recipes.com</a></p>
            <p><strong>Working Hours:</strong> Monday - Friday: 9am - 5pm</p>
        </div>
        <form>
            <h4>Contact Form</h4>
            <input type="text" placeholder='Name & Surname' required />
            <input type="email" placeholder='Email' required />
            <textarea placeholder='Message'required />
            <input type="submit" value="Submit" />
         </form>
    </div> 
  )
}

export default Iletisim