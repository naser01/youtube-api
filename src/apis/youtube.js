import axios from 'axios';

const KEY = 'AIzaSyBkdRcbsuDMfxMJ214O7qYZivCYDzOlu3A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});