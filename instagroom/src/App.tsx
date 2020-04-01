import React from 'react'
import './App.css'

import { AppDispatch } from './store/store'
import { useDispatch } from "react-redux"
import { BroomList } from './ui/BroomList'

export const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  React.useEffect(() => {
    dispatch({ type: 'saga/fetchPublicPhotosFeed', payload: 'beard' })
    // eslint-disable-next-line
  }, [])

  return (
    <article className="App">
      <BroomList />
    </article>
  );
}
