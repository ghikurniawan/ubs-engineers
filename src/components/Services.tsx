import { Building2, Cog, Fan, Zap } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { AspectRatio } from "./ui/aspect-ratio";

interface ServicesProps {}

const Services: FC<ServicesProps> = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 py-6 gap-4">
      <h1 className="font-bold text-2xl text-primary">Our Services</h1>
      <p className="text-center max-w-xl">
        UBS are a building services engineering company incorporating four
        business units that deliver a complete range of specialist services.
      </p>
      <div className="flex flex-wrap justify-evenly items-center gap-4 w-full max-w-screen-xl mx-auto mt-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="rounded-full bg-primary h-24 w-24 border border-secondary flex items-center justify-center text-secondary">
            <Building2 size={32} />
          </div>
          <h1 className="text-primary font-bold">Building Services</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="rounded-full bg-primary h-24 w-24 border border-secondary flex items-center justify-center text-secondary">
            <Fan size={32} />
          </div>
          <h1 className="text-primary font-bold">HVAC Services</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="rounded-full bg-primary h-24 w-24 border border-secondary flex items-center justify-center text-secondary">
            <Zap size={32} />
          </div>
          <h1 className="text-primary font-bold">Energy Services</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="rounded-full bg-primary h-24 w-24 border border-secondary flex items-center justify-center text-secondary">
            <Cog size={32} />
          </div>
          <h1 className="text-primary font-bold">Project Services</h1>
        </div>
      </div>
      <p className="text-center max-w-2xl mt-4">
        Our services support and enable our customers to effectively operate
        their buildings & heat networks in compliance with best practice.
      </p>
      <div className="w-full max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
        <AspectRatio ratio={4 / 3}>
          <Image
            src="https://ik.imagekit.io/ikurniawan/dump/tr:w-600:h-300/hotel.Jpeg?updatedAt=1712459787704"
            alt="Image"
            fill
            sizes="(max-width: 1080px) 100vw, 33vw"
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <AspectRatio ratio={4 / 3}>
          <Image
            src="https://ik.imagekit.io/ikurniawan/dump/tr:w-600:h-300/hotel.Jpeg?updatedAt=1712459787704"
            alt="Image"
            fill
            sizes="(max-width: 1080px) 100vw, 33vw"
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <AspectRatio ratio={4 / 3}>
          <Image
            src="https://ik.imagekit.io/ikurniawan/dump/tr:w-600:h-300/hotel.Jpeg?updatedAt=1712459787704"
            alt="Image"
            fill
            sizes="(max-width: 1080px) 100vw, 33vw"
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <AspectRatio ratio={4 / 3}>
          <Image
            src="https://ik.imagekit.io/ikurniawan/dump/tr:w-600:h-300/hotel.Jpeg?updatedAt=1712459787704"
            alt="Image"
            fill
            sizes="(max-width: 1080px) 100vw, 33vw"
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <AspectRatio ratio={4 / 3}>
          <Image
            src="https://ik.imagekit.io/ikurniawan/dump/tr:w-600:h-300/hotel.Jpeg?updatedAt=1712459787704"
            alt="Image"
            fill
            sizes="(max-width: 1080px) 100vw, 33vw"
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <AspectRatio ratio={4 / 3}>
          <Image
            src="https://ik.imagekit.io/ikurniawan/dump/tr:w-600:h-300/hotel.Jpeg?updatedAt=1712459787704"
            alt="Image"
            fill
            sizes="(max-width: 1080px) 100vw, 33vw"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default Services;
