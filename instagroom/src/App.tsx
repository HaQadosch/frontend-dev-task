import React from 'react'
import './App.css'

import { BroomList } from './ui/BroomList'

export const App: React.FC = () => {
  return (
    <article className="App">
      <BroomList />
    </article>
  );
}
