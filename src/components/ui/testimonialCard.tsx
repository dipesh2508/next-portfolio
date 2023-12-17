import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const TestimonialCard = ({
  avatar,
  name,
  review,
}: {
  avatar: any;
  name: string;
  review: string;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 bg-dark-2 px-4 h-72 md:h-64 min-h-full text-light-1 opacity-95 mb-12 rounded-3xl py-6">
      <div className="md:col-span-1 text-center m-auto w-auto md:m-0 md:flex content-center items-center justify-center md:mb-12 md:w-16">
        <Image src={avatar} alt="" className="h-16 w-16 rounded-full" />
      </div>
      <div className="col-span-3 text-primary md:-ml-4 text-xs md:text-sm font-thin">
        <ImQuotesLeft />
        <div className="text-light-1 text-justify">&emsp; &emsp;{review}</div>
        <div className="flex justify-end">

        <ImQuotesRight />
        </div>
        <div className="mt-3 text-right">
          <span className="text-light-1 font-serif text-sm md:text-base font-semibold">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
