import React, {useEffect} from 'react';
import '../styles/interface.scss';
import { useAppStateValue } from '../contexts';


const Interface = ({API}) => {
    const [{}, dispatch] = useAppStateValue();
    
    useEffect(() => {
        window.history.replaceState({}, document.title, ".");

        API.getMe()
        .then(res => {
            dispatch({
                type: 'SET_USER',
                user: res,
            })
        })
        .catch(err => {
            console.log(err);
        });
    }, [API, dispatch]);
    
    return(
        <div className='interface'>
            <h1>I am your interface now.</h1>
        </div>
    )
}

export default Interface;