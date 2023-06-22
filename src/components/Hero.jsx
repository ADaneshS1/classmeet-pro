import "./../style.css"
import { Button } from "flowbite-react"
import img from "./../assets/g38559.png"

const Hero = () => {
    return (
        <div className="hero1">
            
            <div className="flex flex-col py-10 px-4">
                <p className="text-2xl text-center font-bold texthero">Pondok Pesantren Quran Al-Mahir</p>
                <p className="mt-7 text-center font-semibold texthero herop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi dolores deleniti provident cum, natus minus quam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi dolores deleniti provident cum, natus minus quam</p>
                <p className="mt-7 text-center font-semibold texthero herop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi dolores deleniti provident cum, natus minus quam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi dolores deleniti provident cum, natus minus quam</p>
                <Button className="mt-10 but sm: w-40 lg:w-60">Button</Button>
            </div>

        </div>
    )
}

export default Hero