import "./../style.css"
import 'remixicon/fonts/remixicon.css'

import Nav from "./Nav"
import Hero from "./Hero"
import Hero2 from "./Hero2"
import Hero3 from "./Hero3"
import Foter from "./Footer"

const Main = () => {
    return (
        <div>

            <Nav/>

            <div style={{backgroundColor:"#408ab4"}}>

                <div className="pt-10 back">
                    <Hero/>
                </div>

                <div className='mt-12'>

                    <div style={{textAlign:"center"}}>
                        <p className="hero2p1" style={{color:"#ffff"}}>Unit-Unit PPQ Al Mahir</p>
                        <p className="hero2p2" style={{color:"#ffff"}}>deskripsi................</p>
                    </div>

                    
                    <Hero2/>

                </div>

                <div className='mt-20'>
                    <div className="galeryp" style={{textAlign:"center", fontSize:"22px", color:"#ffff"}}>
                        <p>Galery Kegiatan</p>
                    </div>
                    
                    <div className="hero3grid">
                        <Hero3/>
                        <Hero3/>
                        <Hero3/>
                        <Hero3/>
                    </div>
                   
            </div>

            <Foter/>

                
            </div>

        </div>
    )
}

export default Main