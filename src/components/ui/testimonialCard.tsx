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
    <div className="grid grid-cols-4 bg-dark-2 px-4 h-64 text-light-1 opacity-95 mb-12 rounded-3xl py-6">
      <div className="col-span-1 flex items-center justify-center mb-12 w-16">
        <Image src={avatar} alt="" className="h-16 w-16 rounded-full" />
      </div>
      <div className="col-span-3 text-primary -ml-4 text-sm font-thin">
        <ImQuotesLeft />
        <div className="text-light-1 text-justify">&emsp; &emsp;{review}</div>
        <div className="flex justify-end">

        <ImQuotesRight />
        </div>
        <div className="mt-3 text-right">
          <span className="text-light-1 font-serif text-base font-semibold">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
