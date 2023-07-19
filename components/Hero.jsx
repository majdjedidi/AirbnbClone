import gridAirbnb from '../public/photo-grid.png'
import './styles/hero.css'
export default function Hero(){
    return (
        <section className='hero--sec'>
        <img src={gridAirbnb} className='hero--img'/>
        <h1 className='hero--title'>Online Experiences</h1>
        <p className='hero--par'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
        
    ) 
}