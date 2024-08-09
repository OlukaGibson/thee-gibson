import  logo from "../assets/gperfect.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
  <div>
    <nav className="mb-20 flex items-center justify-between py-6 bg-red-400">
        <div className="fllex flex-shrink-0 items-center">
            <img src={logo} className="m-2 mx-2 w-10" alt="logo" style={{ width: '20%', height: 'auto' }} />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2l">
            <a href="https://www.linkedin.com/in/olukagibson" target="_blank">
            <FaLinkedin />
            </a>
            <a href="https://github.com/OlukaGibson" target="_blank">
            <FaGithub />
            </a>
            <a href="https://x.com/OlsGibson" target="_blank">
            <FaSquareXTwitter />
            </a>
            <a href="https://www.instagram.com/olsgibson/" target="_blank">
              <FaInstagram />
            </a>
        </div>
    </nav>
  </div>
  )
}

export default Navbar
