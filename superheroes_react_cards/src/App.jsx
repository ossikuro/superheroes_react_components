import { HeroCard } from '../components/heroCard.jsx'
import heroes from '../data/heroes.js'

function App() {
    return (
        <div className="container">
            {heroes.map((hero) => (
                <HeroCard key={hero.name} hero={hero} />
            ))}
        </div>
    )
}

export default App
