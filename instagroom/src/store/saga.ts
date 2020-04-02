import { put, takeEvery, all, call } from "redux-saga/effects"
import { setPics } from "./rootReducer";


import Unsplash from "unsplash-js";
const unsplash = new Unsplash({
  accessKey: process.env?.REACT_APP_ACCESS_KEY ?? '',
  headers: {
    "Accept-Version": "v1"
  },
});

export const apiFetch = (search: string) => {
  return unsplash.search.photos(search, 1, 10, { orientation: "portrait" })
    .then(res => res.json())
    .catch(err => console.error({ err }))
}

export function* fetchPublicPhotosFeed (action: { type: string, payload: string }) {
  try {
    const data = yield call(apiFetch, action.payload)
    yield put(setPics(data))
  } catch (fetchError) {
    console.error({ fetchError })
  }
}

function* watchFetchPublicPhotosFeed () {
  // @ts-ignore
  yield takeEvery('saga/fetchPublicPhotosFeed', fetchPublicPhotosFeed)
}

function* firstImport () {
  yield put({ type: 'saga/fetchPublicPhotosFeed', payload: 'beard' })
}

export function* rootSaga () {
  yield all([
    firstImport(),
    watchFetchPublicPhotosFeed()
  ])
}

