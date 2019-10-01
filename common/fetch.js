const fetch = require('isomorphic-unfetch');

const toJson = (res) => res.json()

const fetchData = (url, method, body, headers) => {
  const options = {
    method: method,
    headers: headers ? Object.assign(headers, { 'Content-Type': 'application/json' }) : { 'Content-Type': 'application/json' }
  };
  if (body) {
    Object.assign(options, { body: JSON.stringify(body) })
  }

  if (process.env.NODE_ENV === 'development') {
    url = 'http://0.0.0.0:3030' + url;
  }

  return fetch(url, { ...options })
    .then(toJson)
};


const instance = {
  get: async (url, headers = null) => await fetchData(url, 'GET', null, headers),
  post: async (url, body, headers = null) => await fetchData(url, 'POST', body, headers),
  patch: async (url, body, headers = null) => await fetchData(url, 'PATCH', body, headers),
  delete: async (url, headers = null) => await fetchData(url, 'DELETE', headers)
};

module.exports = instance;
