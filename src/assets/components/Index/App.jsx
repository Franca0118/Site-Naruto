import { useState } from 'react'
import './App.css'
import naruto from '../../components/img/naruto_stick.png'
import sakura from '../../components/img/sakura_stick.png'
import sasuke from '../../components/img/sasuke_stick.png'
import Header from '../Header/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <main>
      <h1>Explore e conheça os<br />personagens do mundo dos<br /> ninjas de <p> Naruto Uzumaki</p> </h1>
      <div> 
          <ul>
            <li><img src={sakura} alt="" /></li>

            <li><img src={naruto} alt="" /></li>
            
            <li><img src={sasuke} alt="" /></li>
          </ul>
      </div>
    </main>
    </>
  )
}

export default App
