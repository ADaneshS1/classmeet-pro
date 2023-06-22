import { Navbar } from 'flowbite-react';
import logo from "./../assets/ppq-w.png"
import "./../style.css"

const Nav = () => {
    return (
        <div>

        <Navbar fluid rounded style={{borderRadius:"0"}}>
              <Navbar.Brand>
                <img
                  alt="Flowbite React Logo"
                  className="mr-3 h-6 sm:h-9"
                  src={logo}
                />

              </Navbar.Brand>

              <div className="flex">
                <Navbar.Toggle />
              </div>

              <Navbar.Collapse>
                <Navbar.Link style={{color:"#34699a"}} href="#">Home</Navbar.Link>
                <Navbar.Link style={{color:"#34699a"}} href="#">About</Navbar.Link>
                <Navbar.Link style={{color:"#34699a"}} href="#">Unit</Navbar.Link>
                <Navbar.Link style={{color:"#34699a"}} href="#">Contact</Navbar.Link>
                <Navbar.Link style={{color:"#34699a"}} href="#">Donasi</Navbar.Link>
              </Navbar.Collapse>
            </Navbar>

        </div>
    )
}

export default Nav