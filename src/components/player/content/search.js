import React from 'react';

const Search = () => {
    return(
        <div className="content-container">
            <div className="card-category">
                <div className="card-category-title"><h2>Artists</h2></div>
                {/* <div className='card-category-items'>{savedAlbums}</div> */}
            </div>
            <div className="card-category">
                <div className="card-category-title"><h2>Albums</h2></div>
                {/* <div className='card-category-items'>{playlists}</div> */}
            </div>
            <div className="card-category">
                <div className="card-category-title"><h2>Tracks</h2></div>
            </div>
        </div>
    )
}

export default Search;