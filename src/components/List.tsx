import React from 'react'
import {IState as IProps} from '../App'

const List = ({people}: IProps) => {

  const renderList = () : JSX.Element[] => {

    return people.map(people => (
      <div className="list-item-container border-2 border-dotted p-5 my-2 hover:bg-slate-100 cursor-pointer">
          <h1 className='text-center'>{people.name} - {people.age} - {people.bio}</h1>
      </div>
    ))
  }
  return (
    <div className='list-container lg:border-l-4 border-indigo-500 flex-1 p-10 mx-auto'>
        <h1 className='text-center lg:text-2xl font-bold lg:text-blue-500'>List</h1>

        {renderList()}
    </div>
  )
}

export default List