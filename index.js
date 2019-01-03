import axios from 'axios'
var instance

function init(host) {
  instance = axios.create({
    baseURL: host,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
function log(message) {
  if (instance) instance.post('/', JSON.stringify({message: message}))
}

export default {
  init,
  log
}
