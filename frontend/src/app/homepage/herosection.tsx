import HeroImage from "../../assets/herosection.jpg";
// import HeroImage from "../../assets/home-hero.png";
import News1 from "../../assets/news-1.jpg";
import News2 from "../../assets/news-2.jpg";
import News3 from "../../assets/news-3.jpg";
import News4 from "../../assets/news-6.jpg";
import News5 from "../../assets/news-5.jpg";
// import News6 from "../../assets/news-6.jpg";
import Image from "next/image";
import SliderCarousel from "@components/homeComponents/sliderCarousel";
import { EmblaOptionsType } from "embla-carousel";

export type slides = {
  tag: string;
  title: string;
  image: string;
  description?: string;
  link: string;
};

const HeroSection = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES: slides[] = [
    {
      tag: "People",
      title:
        "Judith Light Brings Purpose and Elegance to the Forbes Power Women’s Summit",
      image: News1.src,
      description: "tetetetfssfsdgsjhsusgaasf",
      link: "/",
    },

    {
      tag: "Donations",
      title:
        "Co-founders of I.A. Eyeworks, proudly support's our ongoing grant program.",
      image: News2.src,
      description: "Lorem ipsum dolor s.",
      link: "/",
    },
    {
      tag: "NYCFASHIONWEEK",
      title: "Impressions from the Spring-Summer 2026 New York Collections",
      image: News3.src,
      description: "ipsum dolorLorem ipsum dolor s.",
      link: "/",
    },
    {
      tag: "GRANT OFFER'S",
      title:
        "Real support for real designers. Start here today, Enroll for grant today.",
      image: News4.src,
      description: "Lo  ipsum dolorrem ipsum dolor s.",
      link: "/",
    },
    {
      tag: "Membership",
      title:
        "Love Ball III, CFDA and Susanne Bartsch joined forces to bring this to you guys. ",
      image: News5.src,
      description: "Lo  ipsum dolorrem ipsum dolor s.",
      link: "/",
    },
  ];

  return (
    <section className="relative h-[150dvh] md:h-[110dvh] w-full -mt-21 object-cover overflow-hidden">
      <div className="absolute inset-0 from-black/70 to-transparent bg-linear-to-t z-10"></div>
      <Image
        src={HeroImage}
        alt="Ulla Johnson Spring 2026"
        fill
        className="object-cover object-center"
        priority
        sizes="110vw"
      />
      <div className="absolute  bottom-[4rem] md:bottom-12 left-1/2 z-20 -translate-x-1/2 w-full md:max-w-10/12  grid grid-cols-1 md:grid-cols-[4fr_3fr] items-center gap-x-12 justify-between gap-y-20 mx-auto  text-white px-4 md:px-4">
        <div className="max-w-[60ch]  pb-3.5 md:pb-5">
          <h1 className="text-[42px] leading-12 pb-4 epunda-slab ">
            Championing <br />
            American Fashion
          </h1>
          <h4 className="text-balance text-[16px] font-semibold pb-5 leading-relaxed tracking-wider">
            The Council of Fashion Designers of America is a not-for-profit
            trade association founded in 1962 whose membership consists of
            America’s foremost womenswear, menswear, jewelry and accessory
            designers.
          </h4>
          <button className="capitalize text-lg px-3 py-2 bg-gray-200 text-gray-800">
            Learn More
          </button>
        </div>
        <div className="w-full">
          <SliderCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
