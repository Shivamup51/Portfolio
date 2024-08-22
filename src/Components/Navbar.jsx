import logo from "../assets/shivamlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-10">
            <div className="flex flex-shrink-0 items-center">
                <img
                    className="mx-6 w-12  rounded-xl border-neutral-900"
                    src={logo}
                    alt="logo"
                />
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/shivam-upadhyay-824888246/"><FaLinkedin /></a>
                <a href="https://github.com/Shivamup51"><FaGithub /></a>
                <a href="mailto:shivamupadhyay2868@gmail.com"><FaMailBulk/></a>
                <a href="https://leetcode.com/u/Shivamupadhyay/"><SiLeetcode/></a>
            </div>
        </nav>
    )
}

export default Navbar
