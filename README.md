A spotify clone created from scratch with react.
https://tune42-spotify.netlify.app/

---------------------------------------------------------------------------

For anyone wishing to fork or clone this repo, you will need to setup your own authorization link.
To do this, you will need to create a development account with spotify for your own Client ID and to setup a redirect URI. 
You will need to add appropriate scopes of permissions that you are requesting from the user who would log into the app. You will also need a redirectUri to be set in your developer dashboard. The redirectUri is where spotify will send the user once they've authenticated with spotify using the Authorization Code Flow. 

https://developer.spotify.com/documentation/general/guides/authorization-guide/
https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app
https://developer.spotify.com/dashboard/
https://developer.spotify.com/documentation/general/guides/scopes/

Below is a mock example of what my private.js file looks like.

----------------------------------------------------------------------------

const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = 'http://localhost:3000/player'
const clientId = '######################' //Generated for you when you sign up at developer.spotify.com

const scopes = [
    'streaming',
    'playlist-modify-public',
    'playlist-modify-private',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-playback-state',
    'user-read-email',
    'user-read-private',
    'user-read-currently-playing',
    'user-modify-playback-state',
    'user-follow-modify',
    'user-follow-read',
];

const authLink = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

export default authLink;