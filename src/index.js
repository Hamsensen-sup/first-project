import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function Page(){
    const cardElement = data.map(cardData =>{
        return <Card
            key={cardData.id}
            item={cardData}
            // img={cardData.coverImg}
            // rating={cardData.stats.rating}
            // reviewCount={cardData.stats.reviewCount}
            // country={cardData.country}
            // title={cardData.title}
            // price={cardData.price}
            // openSpots={cardData.openSpots} 
            // location={cardData.location}
        />
    })

    return(
        <div>
            <Navbar />
            <Hero />
            <div className='cards-list'>
                {cardElement}
            </div>
            
        </div>
        /* <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="• USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
         /> */
    )
    
}

const root = createRoot(document.getElementById("root"))
root.render(<Page />);