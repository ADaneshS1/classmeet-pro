import { Footer } from 'flowbite-react';
import 'remixicon/fonts/remixicon.css'
import "./../style.css"
import { IframeHTMLAttributes } from 'react';

const Foter = () => {
    return (  
        <Footer container className='footer mt-10' style={{backgroundColor:"#113f67", borderRadius:"0"}}>

            <div className='foot1'>


                <div className="">
                    <p>Alamat</p>
                    <p>Jl. Adi Sumarmo, RT.01/RW.07, Gawanan, Colomadu, Karanganyar, Jawa Tengah</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.376928395941!2d110.75908037374134!3d-7.533804174357173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a147e46eda873%3A0xd2f585378cd3f5e3!2sPPQ%20AL-MAHIR!5e0!3m2!1sid!2sid!4v1687399467551!5m2!1sid!2sid" height="200" style={{borderRadius:"10px"}}></iframe>
                </div>

                <div>

                    <div>
                        <p>Contact</p>
                    </div>

                    <div style={{display:"flex", alignItems:"center", gap:"5px"}}>
                        <i class="ri-whatsapp-line"></i>
                        <p>+62 812-3210-4431</p>
                    </div>

                </div>

                <div>
                    <p>Social Media</p>

                    <div>
                        <i class="ri-instagram-line" style={{margin:"0 6px"}}></i>
                        <i class="ri-facebook-circle-line" style={{margin:"0 6px"}}></i>
                    </div>
                </div>


            </div>

            <Footer.Divider />

            <div className='foot2'>
               
                <Footer.Copyright by="PPQ Al Mahir" year={2023} style={{color: "#f3f8ff"}}/>

            </div>
           
        </Footer>
    )
}

export default Foter