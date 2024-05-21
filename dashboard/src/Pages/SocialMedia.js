import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SocialMedia.css';
import facebookImg from './facebook-messenger.png';  // Import your images
import gmailImg from './gmail.png';
import phoneImg from './phone-call.png';

function SocialMedia() {
    const navigate = useNavigate();

    useEffect(() => {
        const storedAdmin = localStorage.getItem('adminID');

        // If there's an adminID and not on the admin page, redirect to admin
        if (storedAdmin && window.location.pathname !== '/admin') {
          navigate('/admin');
        }
        getImage();
    }, [navigate]);

    const getImage = async () => {
        try {
          const response = await fetch("http://localhost:1337/get-image");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          // setAllImage(data.data); // Assuming you have a state for images
        } catch (error) {
          console.error("Error fetching image data:", error);
        }
    };

    const facebookUrl = 'https://www.facebook.com/Mrs.Bakers/';

    return (
        <div className='main'>
            <h3 className='Social-Title'>Social Media</h3>
            <div className='social-container'>
                <Link to={facebookUrl} className='link'>
                    <div className='social-box'>
                        <img src={facebookImg} alt="Facebook" className='social-image'/>
                        <h4>Facebook</h4>
                        <p>Connect with us on Facebook for updates and more.</p>
                        <p className='click-here'>Click here</p>
                    </div>
                </Link>
                <Link to="mailto:contact@mrsbakerscafe.com" className='link'>
                    <div className='social-box'>
                        <img src={gmailImg} alt="Gmail" className='social-image'/>
                        <h4>Gmail</h4>
                        <p>Reach us via Gmail for any inquiries or support.</p>
                        <p className='click-here'>Click here</p>
                    </div>
                </Link>
                    <div className='social-box'>
                        <img src={phoneImg} alt="Phone" className='social-image'/>
                        <h4>Telephone Number</h4>
                        <p>Call us for immediate assistance or support. (078) 805 3500 </p>
                        <p></p>
                    </div>
            </div>
        </div>
    );
}

export default SocialMedia;
