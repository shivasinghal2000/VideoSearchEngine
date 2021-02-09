import axios from 'axios'
const KEY = 'AIzaSyBgYv8oEmou0klLD9lVoq_IC1oN3KUYpQM'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
