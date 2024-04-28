import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get("/api/jokes").then((response)=>{
      setJokes(response.data)
    }).catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
      <h1>First Full Stack</h1>
      <h2>JOKES: {jokes.length}</h2>

      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.contact}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
