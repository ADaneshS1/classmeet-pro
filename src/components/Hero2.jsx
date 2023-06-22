import { Card } from 'flowbite-react';
import "./../style.css"

const Hero2 = () => {
    return (
        
        <div>
            <div className="lg:flex justify-center align-top gap-7">
            <Card className="mt-6 card" style={{ backgroundColor: "#34699a",  border: "3px solid #65c6c4"}}>

                <h5 className="text-2xl font-bol text-center" style={{color:'#65c6c4', padding:"12px 0"}}>
                    <p>TPA Al Mahir</p>
                </h5>
                    
                <ul style={{listStyle:"outside", color:"#65c6c4"}}>
                    <li>Anak-anak usia 6-13 thn</li>
                    <li>
                        Materi Pokok:
                        <div>
                            <p>Karimah dasar & tahsin,</p>
                            <p>Tilawah Al-Qur'an,</p>
                            <p>Hafalan juz 30</p>
                        </div>
                    </li>
                    <li>
                        Materi Penunjang:
                        <div>
                            <p>Aqidah, Doa, Dzikir & Adab Harian, Fiqih ibadah, Siroh, bhs. Arab dasar, Hadits-hadits pilihan, kitabah/khat</p>
                        </div>
                    </li>
                    <li>Masa pendidikan 2 tahun</li>
                    <li>Ujian & terima rapot setiap 1 semester (6 bulan)</li>
                </ul>

            </Card>

            <Card className="mt-6 card card22" style={{ backgroundColor: "#34699a",  border: "3px solid #65c6c4"}}>

                    <h5 className="text-2xl font-bol text-center" style={{color:'#65c6c4', padding:"0"}}>
                        <p>PPQ IT Al Mahir</p>
                    </h5>
                        
                    <ul style={{listStyle:"outside", color:"#65c6c4"}}>
                        <li>Pondok IT setaraf SLTA (Khusus ikhwan)</li>
                        <li>Karantina bhs. Arab & bhs. Inggris</li>
                        <li>
                            Materi diniyyah & tahfidz:
                            <div>
                                <p>Aqidah, Fiqih, Siroh, Imla'/Khat, dll</p>
                            </div>
                        </li>
                        <li>Materi IT berbasis project (FrontEnd, BackEnd, Mobile)</li>
                    </ul>

                </Card>

                <Card className="mt-6 card card23" style={{ backgroundColor: "#34699a",  border: "3px solid #65c6c4"}}>

                    <h5 className="text-2xl font-bol text-center" style={{color:'#65c6c4', padding:"0"}}>
                        <p>Reguler Tahsin</p>
                    </h5>
                        
                    <ul style={{listStyle:"outside", color:"#65c6c4"}}>
                        <li>Tersedia kelas privat maupun reguler</li>
                        <li>Tersedia kelas ikhwan ataupun akhwat</li>
                        <li>Menggunakan metode Karimah</li>
                        <li>Dibimbing langsung oleh Asatidzah yang telah terlatih mengerjakan metode Karimah</li>
                        <li>3 bulan masa belajar</li>
                    </ul>

                </Card>

            </div>

            <div className="lg:flex justify-center align-top gap-7">

                <Card className=" mt-6 card card24" style={{ backgroundColor: "#34699a",  border: "3px solid #65c6c4"}}>

                    <h5 className="text-2xl font-bol text-center" style={{color:'#65c6c4', padding:"0"}}>
                        <p>Reguler Bahasa Arab</p>
                    </h5>
                        
                    <ul style={{listStyle:"outside", color:"#65c6c4"}}>
                        <li>Durusullughah</li>
                        <li>Nahwu & Sharaf</li>
                        <li>Periode belajar 6 bulan</li>
                    </ul>

                </Card>

                <Card className="mt-6 card card25" style={{ backgroundColor: "#34699a",  border: "3px solid #65c6c4"}}>

                    <h5 className="text-2xl font-bol text-center" style={{color:'#65c6c4', padding:"0"}}>
                        <p>Kelas Tahfidz</p>
                    </h5>
                        
                    <ul style={{listStyle:"outside", color:"#65c6c4"}}>
                        <li>Setoran hafalan juz 1-3 & 28-30</li>
                        <li>Pembelajaran sepekan 2x</li>
                        <li>Periode belajar 6 bulan</li>
                        <li>Target 6 bulan hafal 3 juz</li>
                    </ul>

                </Card>

            </div>
              
        </div>

        
    )
}

export default Hero2