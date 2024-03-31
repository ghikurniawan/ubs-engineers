import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface CtaProps {
    
}
 
const Cta: FC<CtaProps> = () => {
    return ( 
        <div className="w-full bg-secondary py-4">
            <div className=" w-full max-w-screen-2xl mx-auto flex flex-col justify-center items-center gap-2">
                <h3 className="text-primary font-bold">So, why wait? Talk to us today.</h3>
                <Link href={'/contact-us'} >
                    <Button variant={'outline'} className="bg-secondary border-primary hover:bg-primary hover:text-secondary">Get In Touch</Button>
                </Link>
            </div>
        </div>
     );
}
 
export default Cta;