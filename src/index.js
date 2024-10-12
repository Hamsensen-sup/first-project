import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

function Page(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Card />
        </div>
    )
    
}

const root = createRoot(document.getElementById("root"))
root.render(<Page />);