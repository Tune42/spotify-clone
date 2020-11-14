import React, {useState, useEffect} from 'react';

const Home = ({API, changeContextURI}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // getMySavedAlbums
        API.getUserPlaylists()
        .then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    });

    return(
        <div className="content-container">
            <h1>Home</h1>
        </div>
    )
}

export default Home;