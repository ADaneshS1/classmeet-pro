import { Card } from 'flowbite-react';
import img from "./../assets/20220812_071613140.jpg"
import "./../style.css"

const Hero3 = () => {
    return (
        <Card className='border-none mt-10 card3' style={{backgroundColor:"#34699a", border: "3px solid #65c6c4"}}>
                <img className="img3" src={img}/>
                <p className="font-normal" style={{color:"#65c6c4"}}>
                    <p>Here are the biggest enterprise technology acquisitions .</p>
                </p>
        </Card>
    )
}

export default Hero3