import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/card'
import './App.css'
import data from './data'
function App() {
 const cards = data.map(item =>{
  return(
<Card
      key={item.id}
      item={item}
      // or pass it like this {...item} and delete .item in card.jsx
        />  
  )
 })

  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <section className='cardList'>
      {cards}
      </section>
      </div>
  )
}

export default App
