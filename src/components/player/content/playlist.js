import React, {useState, useEffect} from 'react';
import TrackTable from './tracktable';

const Playlist = ({image, type, name, description, tracks, playerState, API, contextURI, artistURI, changeContextURI}) => {
    const [following, setFollowing] = useState(null);

    useEffect(() => {
        async function getFollowStatus() {
            if (type === 'album') {
                await API.containsMySavedAlbums([contextURI.split(':').pop()])
                .then(res => setFollowing(res[0]))
                .catch(err => console.log(err));
            } else {
                let userID;
                await API.getMe()
                .then(res => userID = res.id)
                .catch(err => console.log(err));
                await API.areFollowingPlaylist(contextURI.split(':').pop(), [userID])
                .then(res => setFollowing(res[0]))
                .catch(err => console.log(err));
            }
        }
        getFollowStatus();
    });

    const toggleFollowStatus = () => {
        if (!following) {
            if (type === 'album') {
                API.addToMySavedAlbums([contextURI.split(':').pop()])
                .then(() => {
                    setFollowing(!following);
                }).catch(err => console.log(err));
            } else {
                API.followPlaylist(contextURI.split(':').pop())
                .then(() => {
                    setFollowing(!following);
                }).catch(err => console.log(err));
            }
        } else {
            if (type === 'album') {
                API.removeFromMySavedAlbums([contextURI.split(':').pop()])
                .then(() => {
                    setFollowing(!following);
                }).catch(err => console.log(err));
            } else {
                API.unfollowPlaylist(contextURI.split(':').pop())
                .then(() => {
                    setFollowing(!following);
                }).catch(err => console.log(err));
            }
        }
    }

    let subtitle;
    artistURI ? 
    subtitle = <p className='artist-link' onClick={() => changeContextURI(artistURI)}>{description}</p> : 
    subtitle = <p>{description}</p>;

    return(
        <div className='content-container'>
            <div className="title-row">
                <div className='art'>
                    <img src={image} alt="Cover Art" width='200px' />
                </div>
                <div className='playlist-info'>
                    <p style={{fontWeight: 400, textTransform: "uppercase"}}>
                        <small>{type}</small>
                        <i className="fa fa-heart" style={following ? {color: '#1ED760'} : {}} onClick={toggleFollowStatus}></i>
                    </p>
                    <h1 className='playlist-title'>{name}</h1>
                    {subtitle}
                </div>
            </div>
            <TrackTable 
            tracks={tracks} 
            album={name} 
            playerState={playerState} 
            API={API} 
            contextURI={contextURI}
            changeContextURI={changeContextURI} />
        </div>
    )
}

export default Playlist