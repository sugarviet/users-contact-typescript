import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'

export interface IState{
    people:{
    name: string,
    age: number,
    bio: string
  }[]
}

function App() {
  const [person, setPerson] = useState<IState['people']>([{name:'Viet', age: 20, bio: 'Ahihi'}, {name:'Hehe', age: 20, bio: 'Ahihi'}]);

  return (
    <div className="container lg:flex p-10  h-screen align-middle">
     <Form people={person} setPeople={setPerson}/>
     <List people={person}/>
    </div>
  )
}

export default App
