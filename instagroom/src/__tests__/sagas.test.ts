import { call, put } from "redux-saga/effects";
import { fetchPublicPhotosFeed, apiFetch } from "../store/saga"

test('fetchPublicPhotosFeed', () => {
  const gen = fetchPublicPhotosFeed({ type: 'saga/fetchPublicPhotosFeed', payload: 'beard' })

  expect(gen.next().value).toEqual(call(apiFetch, 'beard'))
  expect(gen.next().value).toEqual(put({ type: 'unsplash/setPics' }))
  expect(gen.next()).toEqual({ done: true, value: undefined })
})
