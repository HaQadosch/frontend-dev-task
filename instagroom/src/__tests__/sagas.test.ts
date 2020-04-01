import { fetchPublicPhotosFeed, apiFetch } from "../store/saga";
import { call, put } from "redux-saga/effects";

test('fetchPublicPhotosFeed', () => {
  const gen = fetchPublicPhotosFeed({ type: 'saga/fetchPublicPhotosFeed', payload: 'beard' })

  expect(gen.next().value).toEqual(call(apiFetch, 'beard'))
  expect(gen.next().value).toEqual(put({ type: 'unsplash/setPics' }))
  expect(gen.next()).toEqual({ done: true, value: undefined })
})
