import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

function Contact() {
    return (
        <div className="h-screen w-full bg-gradient-to-r from-gray-900 via-purple-800 to-black text-white flex flex-col items-center justify-center p-8">
            {/* Title */}
            <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                You can contact me here
            </h1>

            {/* Icon Container */}
            <div className="flex space-x-6 mt-6 text-3xl">
                <span className="hover:text-blue-400 transition duration-300">
                    <LuInstagram />
                </span>
                <span className="hover:text-blue-400 transition duration-300">
                    <FaLinkedin />
                </span>
                <span className="hover:text-blue-400 transition duration-300">
                    <FaSquareXTwitter />
                </span>
                <span className="hover:text-blue-400 transition duration-300">
                    <BiLogoGmail />
                </span>
            </div>
        </div>
    );
}

export default Contact;
