import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../index.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialmedia'>
            <InstagramIcon/><FacebookIcon/><TwitterIcon/><LinkedInIcon/>

        </div>
        <p>&copy;2023 manishpizzeria.com</p>

    </div>
  )
}

export default Footer