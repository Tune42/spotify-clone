/* eslint-disable no-empty-pattern */
import React, {useEffect} from 'react';
import { useAppStateValue } from '../contexts';
import Sidebar from '../components/player/sidebar/sidebar';


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
        <>
            <Sidebar />
        </>
    )
}

export default Interface;