import fetch from 'isomorphic-unfetch';

export const toJson = (res) => res.json();

export const checkEnv = (url) => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://0.0.0.0:3030' + url;
  }
  return url;
};

export const fetchData = async (url, method, body, headers) => {
  const options = {
    method: method,
    headers: headers ? Object.assign(headers, { 'Content-Type': 'application/json' }) : { 'Content-Type': 'application/json' }
  };
  if (body) {
    Object.assign(options, { body: JSON.stringify(body) });
  }

  url = checkEnv(url);

  const data = await fetch(url, { ...options });

  return toJson(data);
};


const instance = {
  get: async (url, headers = null) => await fetchData(url, 'GET', null, headers),
  post: async (url, body, headers = null) => await fetchData(url, 'POST', body, headers),
  patch: async (url, body, headers = null) => await fetchData(url, 'PATCH', body, headers),
  delete: async (url, headers = null) => await fetchData(url, 'DELETE', headers)
};

export default instance;
