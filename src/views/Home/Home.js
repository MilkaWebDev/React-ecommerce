import React from 'react'
import Portada from '../../components/portada/Portada'
import GridCatalogue from '../../components/home/gridCatalogue/GridCatalogue'
import History from '../../components/home/history/History'
import Footer from '../../components/footer/Footer'

const Home = () => {
    
   
    return (
        <div>
            <Portada />
            <GridCatalogue />
            <History />
            <Footer />
        </div>
    )
}

export default Home
