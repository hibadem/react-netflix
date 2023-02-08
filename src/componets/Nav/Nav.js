import React, { useState, useEffect } from 'react';
import './Nav.scss';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
            return;
        }

        handleShow(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
    }, [])
    return (
        <div className={`nav ${show && '-black'}`}>
            <div className="nav__content">
                <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" />
                <img className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>
        </div>
    )
}

export default Nav;