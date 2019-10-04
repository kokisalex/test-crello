jest.mock('isomorphic-unfetch');
import fetch from 'isomorphic-unfetch';
import {
  toJson,
  fetchData,
} from './fetch';

it('toJson', () => {
  const res = {
    json: jest.fn(() => ({ a: 1 }))
  };

  expect(toJson(res)).toEqual({ a: 1 });
});

it('fetchData: body', async () => {
  fetch.mockReturnValue(Promise.resolve({ json: jest.fn }));

  const url = '/hello';
  const method = 'POST';
  const body = { hello: 'world' };
  const headers = {};

  await fetchData(url, method, body, headers);

  expect(fetch).toHaveBeenCalledWith(
    '/hello',
    {
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    });
});

it('fetchData: not body', async () => {
  fetch.mockReturnValue(Promise.resolve({ json: jest.fn }));

  const url = '/hello';
  const method = 'GET';
  const body = null;
  const headers = {
    'Hello-World': 'hello/world'
  };

  await fetchData(url, method, body, headers);

  expect(fetch).toHaveBeenCalledWith(
    '/hello',
    {
      headers: { 'Content-Type': 'application/json', 'Hello-World': 'hello/world' },
      method: 'GET'
    });
});

it('fetchData: env', async () => {
  fetch.mockReturnValue(Promise.resolve({ json: jest.fn }));

  const url = '/hello';
  const method = 'GET';
  const body = null;
  const headers = {
    'Hello-World': 'hello/world'
  };

  await fetchData(url, method, body, headers);

  expect(fetch).toHaveBeenCalledWith(
    '/hello',
    {
      headers: { 'Content-Type': 'application/json', 'Hello-World': 'hello/world' },
      method: 'GET'
    });
});
