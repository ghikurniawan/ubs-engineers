import Image from "next/image";
import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className="w-full relative h-[50vh] lg:h-[80vh]">
      <div className="absolute w-full h-full flex items-center justify-center z-20">
        <h1 className="text-white text-2xl lg:text-6xl text-center">
          We Are <span className="font-bold">Leading</span> Industry of
          Engineers
        </h1>
      </div>
      <div className="absolute w-full h-full bg-black opacity-30 z-10" />
      <div className="absolute bottom-0 w-full h-2 bg-secondary z-10" />
      <Image
        src={"https://ik.imagekit.io/ikurniawan/dump/tr:w-600:h-300/hotel.Jpeg?updatedAt=1712459787704"}
        fill
        className="object-cover"
        priority={true}
        sizes="(max-width: 1080px) 100vw, 33vw"
        alt={"Hero image"}
      />
    </div>
  );
};

export default Hero;
