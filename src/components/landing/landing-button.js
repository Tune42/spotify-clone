import React from 'react';
import '../../styles/landing-button.scss';

const LandingButton = () => {
    return(
        <button className='body-button'
        onMouseDown={(e) => e.target.style.transform = "scale(.95)"}
        onMouseUp={(e) => e.target.style.transform = "scale(1)"}
        onMouseOut={(e) => e.target.style.transform = "scale(1)"}>Log In Here</button>
    )
}

export default LandingButton;