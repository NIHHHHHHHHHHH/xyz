import { FaGithub, FaLinkedin} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const SocialMediaIcons = ({ className }) => {
    return (
        <div className={`flex justify-center md:justify-start my-10 gap-9 ${className}`}>
            <a
                href="https://www.linkedin.com/in/nihal-gavandi-733993225/"
                target="_blank"
                rel="noreferrer"
            >
                <FaLinkedin size={17} />
            </a>
            <a
                href="https://github.com/NIHHHHHHHHHHH"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub size={17} />
            </a>
            
          
            <a
                href="mailto:nihalgavandi00@gmail.com"
                target="_blank"
                rel="noreferrer"
            >
                <MdEmail size={17} />
            </a>
        </div>
    )
}

export default SocialMediaIcons;