import axios from 'axios';

const  KEY = "AIzaSyC_i9c9cfpD5UarByGqAzsBIxQVbO7F_jM";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

