import React, {useEffect} from 'react';
import '../styles/interface.scss';


const Interface = ({API}) => {
    
    useEffect(() => {
        window.history.replaceState({}, document.title, ".");
    }, []);
    
    API.getMe()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

    return(
        <h1>I am your interface now.</h1>
    )
}

export default Interface;