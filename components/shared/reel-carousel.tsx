
"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reels = [
  "https://res.cloudinary.com/xmg6q7k7/video/upload/v1786428645/Video-35786.mp4",
  "https://res.cloudinary.com/xmg6q7k7/video/upload/v1786428644/Video-41193.mp4",
  "https://res.cloudinary.com/xmg6q7k7/video/upload/v1786428627/Video-78221.mp4",
  "https://res.cloudinary.com/xmg6q7k7/video/upload/v1786428624/Video-92474.mp4",
  "https://res.cloudinary.com/xmg6q7k7/video/upload/v1786429161/Video-20285.mp4",
];

export function ReelCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % reels.length);
  };

  const goPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + reels.length) % reels.length
    );
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  return (
    <section className="w-full overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="relative flex items-center justify-center">

          {/* Left Arrow */}
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous reel"
            className="
              absolute left-0 z-30
              flex h-10 w-10 items-center justify-center
              rounded-full
              border border-border
              bg-background
              text-foreground
              shadow-sm
              transition-all duration-300
              hover:border-brand
              hover:bg-brand
              hover:text-white
              sm:relative
              sm:left-auto
              sm:mr-5
            "
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Reel Track */}
          <div className="flex items-center justify-center gap-3 sm:gap-5">

            {reels.map((src, index) => {
              const position =
                (index - activeIndex + reels.length) % reels.length;

              const isCenter = position === 0;
              const isLeft = position === reels.length - 1;
              const isRight = position === 1;

              if (!isCenter && !isLeft && !isRight) {
                return null;
              }

              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => {
                    if (isCenter) {
                      const video = videoRefs.current[index];

                      if (!video) return;

                      if (video.paused) {
                        video.play().catch(() => {});
                      } else {
                        video.pause();
                      }
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                  className={`
                    relative shrink-0 overflow-hidden rounded-2xl
                    bg-black
                    transition-all duration-500 ease-out
                    focus:outline-none
                    ${
                      isCenter
                        ? `
                          h-[390px] w-[220px]
                          scale-100
                          opacity-100
                          shadow-2xl
                          ring-1 ring-border
                          sm:h-[500px] sm:w-[280px]
                        `
                        : `
                          hidden
                          h-[340px] w-[190px]
                          scale-90
                          opacity-40
                          sm:block
                          sm:h-[430px] sm:w-[235px]
                        `
                    }
                  `}
                >
                  <video
                    ref={(video) => {
                      videoRefs.current[index] = video;
                    }}
                    src={src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />

                  {/* Side reel overlay */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-background/30" />
                  )}

                  {/* Center reel subtle gradient */}
                  {isCenter && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                  )}
                </button>
              );
            })}

          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next reel"
            className="
              absolute right-0 z-30
              flex h-10 w-10 items-center justify-center
              rounded-full
              border border-border
              bg-background
              text-foreground
              shadow-sm
              transition-all duration-300
              hover:border-brand
              hover:bg-brand
              hover:text-white
              sm:relative
              sm:right-auto
              sm:ml-5
            "
          >
            <ChevronRight className="h-5 w-5" />
          </button>

        </div>

      </div>
    </section>
  );
}
