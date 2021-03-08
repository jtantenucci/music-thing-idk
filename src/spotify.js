

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUrl = 'http://localhost:3000/';
const clientId = 'b66a4d89c97b4167856db53662c18060';

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-modify-public",
    "playlist-modify-private",
];

//this is pulling access token from the redirect url by locating the url #
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1) 
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = 
        decodeURIComponent(parts[1]);
        //accessToken = decode the key and pass into parts 1
        return initial;
    }, {});
}

//login url to use in login page
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

