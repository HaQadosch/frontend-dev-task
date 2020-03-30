import { put, takeEvery, all, call } from "redux-saga/effects"
import { increment, unsplashInc } from "./rootReducer";


import Unsplash from "unsplash-js";
const unsplash = new Unsplash({
  accessKey: process.env?.REACT_APP_ACCESS_KEY ?? '',
  headers: {
    "Accept-Version": "v1"
  },
});

function* helloSaga () {
  console.log({ saga: 'hello Saga!' })
  yield 1
}

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* incrementAsync () {
  yield call(delay, 1000)
  yield put(increment())
}

function* watchIncrementAsync () {
  // @ts-ignore
  yield takeEvery('saga/incrementAsync', incrementAsync)
}


const apiFetch = (search: string) => {
  return unsplash.search.photos(search, 1, 10, { orientation: "portrait" })
    .then(res => res.json())
    .then(json => {
      console.log({ json })
      return json
    })
    .catch(err => console.error({ err }))
}

export function* fetchPublicPhotosFeed (action: { type: string, payload: string }) {
  try {
    const data = yield call(apiFetch, action.payload)
    console.log({ data })
    yield put(unsplashInc(data))
  } catch (fetchError) {

  }
}

function* watchFetchPublicPhotosFeed () {
  // @ts-ignore
  yield takeEvery('saga/fetchPublicPhotosFeed', fetchPublicPhotosFeed)
}

export function* rootSaga () {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchFetchPublicPhotosFeed()
  ])
}

