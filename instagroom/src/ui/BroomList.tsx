import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
// import { sample } from "../store/slices/unsplash";
import { BroomCard } from './BroomCard';
import './BroomList.css'

interface IBroomList {

}

export const BroomList: React.FC<IBroomList> = () => {
  const { items } = useSelector(({ unsplash }: RootState) => unsplash)
  // const items = [sample, sample, sample]

  return (
    <div>
      <ul className='cardList'>
        {
          items.map((item, index) => (
            <li key={ index }>
              <BroomCard item={ item } />
            </li>
          ))
        }
      </ul>
    </div>
  )
}