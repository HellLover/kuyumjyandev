import { socials } from "../../types/resources";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className="sticky top-0 bg-transparent backdrop-blur-md p-4 z-50">
            <div className="max-w-2xl mx-auto flex justify-between items-center border-1 border-gray-800 bg-gray-800 rounded-full p-4 shadow-sm shadow-gray-900">
                <div className='ml-4 text-white font-bold text-xl pointer-events-none'>
                    <span className='bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent'>kuyumjyan</span>
                </div>
                <div className='flex row gap-2 content-center justify-center mr-5'>
                    <a href="https://chat.kuyumjyan.xyz"
                        className="text-sm font-bold bg-gray-700 mr-4 border border-indigo-400 rounded-md px-2 py-1 transition-transform duration-300 hover:bg-gray-800"
                    >
                        CHAT APP
                    </a>
                    <a href={socials.github} target='_blank' rel='noreferrer' className='transform hover:text-violet-200'>
                        <AiFillGithub size={26} />
                    </a>
                    <a href={socials.linkedin} target='_blank' rel='noreferrer' className='transform hover:text-violet-200'>
                        <AiFillLinkedin size={26} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
