import { FC } from "react";

interface FooterProps {
    
}
 
const Footer: FC<FooterProps> = () => {
    return ( 
        <div className="w-full p-2 bg-primary flex justify-center text-white">
            &copy; UBS Engineers 2024
        </div>
     );
}
 
export default Footer;