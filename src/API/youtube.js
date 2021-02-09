import axios from 'axios'
const KEY = 'AIzaSyCUvwA8ZuH3OJAJmiyhFnh4-iJXoYNMSmo'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
