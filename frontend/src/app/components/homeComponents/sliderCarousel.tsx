"use client";
import React, { useRef } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "./sliderAutoplay";
import { useAutoplayProgress } from "./sliderAutoplayProgress";
import { NextButton, PrevButton, usePrevNextButtons } from "./sliderButtons";
import "./css/slider.css";
import Image from "next/image";
import { slides } from "@/app/homepage/herosection";
import { ChevronRight, LucideMoveRight, MoveRightIcon } from "lucide-react";
import Link from "next/link";
export type PropType = {
  slides: slides[];
  options?: EmblaOptionsType;
};

const SliderCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const progressNode = useRef<HTMLDivElement | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  const { showAutoplayProgress } = useAutoplayProgress(
    emblaApi,
    progressNode as React.RefObject<HTMLElement>
  );

  return (
    <div className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides &&
            slides.map((slide, index) => (
              <div
                className="embla__slide !w-[80px] backdrop-blur-xl backdrop-filter h-[250px] md:h-[200px]"
                key={index}
              >
                <div className="grid grid-cols-[4fr_4fr] md:grid-cols-[3fr_4fr] items-center justify-center gap-x-4 px-2 py-3">
                  <div className=" relative h-[200px] md:h-[180px]">
                    <Image
                      src={slide.image}
                      priority
                      alt="banner Image"
                      fill
                      className="absolute w-[65px] md:w-[130px] inset-0 rounded-lg object-cover"
                    />
                  </div>
                  <div className="relative flex flex-col items-start gap-y-4">
                    <span className="w-fit uppercase text-xs md:text-sm  backdrop-blur-xl backdrop-filter  rounded-md px-2 py-2">
                      {slide.tag}
                    </span>
                    <span className="text-sm ">{slide.title}</span>
                    <Link href="/" className=" mt-3 font-bold size-7">
                      <LucideMoveRight size={32} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="embla__controls flex items-center justify-around overflow-hidden">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onAutoplayButtonClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <div
          className={`embla__progress`.concat(
            showAutoplayProgress ? "" : " embla__progress--hidden"
          )}
        >
          <div className="embla__progress__bar" ref={progressNode} />
        </div>

        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {autoplayIsPlaying ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default SliderCarousel;
