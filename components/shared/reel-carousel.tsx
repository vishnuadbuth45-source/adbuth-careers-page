
"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

const reels = [
  "https://res.cloudinary.com/xmg6q7k7/video/upload/v1786428645/Video-35786.mp4",
  "https://res.cloudinary.com/xmg6q7k7/video/upload/v1786428644/Video-41193.mp4",
  "https://res.cloudinary.com/xmg6q7k7/video/upload/v1786428627/Video-78221.mp4",
  "https://res.cloudinary.com/xmg6q7k7/video/upload/v1786428624/Video-92474.mp4",
  "https://res.cloudinary.com/xmg6q7k7/video/upload/v1786429161/Video-20285.mp4",
];

export function ReelCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % reels.length);
    setShowPlayButton(false);
  };

  const goPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + reels.length) % reels.length
    );
    setShowPlayButton(false);
  };

  // Play active video whenever activeIndex changes
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.muted = isMuted;

        video
          .play()
          .then(() => {
            setIsPlaying(true);
            setShowPlayButton(false);
          })
          .catch(() => {
            setIsPlaying(false);
            setShowPlayButton(true);
          });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  // Click center video
  const handleVideoClick = () => {
    const video = videoRefs.current[activeIndex];

    if (!video) return;

    if (video.paused) {
      // PLAY
      video
        .play()
        .then(() => {
          setIsPlaying(true);

          // Hide play icon after playing
          setTimeout(() => {
            setShowPlayButton(false);
          }, 300);
        })
        .catch(() => {});
    } else {
      // PAUSE
      video.pause();
      setIsPlaying(false);

      // Show play button because video is paused
      setShowPlayButton(true);
    }
  };

  // Mute / Unmute
  const toggleMute = (event: React.MouseEvent) => {
    event.stopPropagation();

    const video = videoRefs.current[activeIndex];

    if (!video) return;

    const newMutedState = !video.muted;

    video.muted = newMutedState;
    setIsMuted(newMutedState);

    // Try playing again after unmuting
    if (!newMutedState) {
      video.play().catch(() => {});
    }
  };

  return (
    <section className="w-full overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex items-center justify-center">

          {/* LEFT ARROW */}
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

          {/* REEL TRACK */}
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
                <div
                  key={src}
                  onClick={() => {
                    if (isCenter) {
                      handleVideoClick();
                    } else {
                      setActiveIndex(index);
                      setShowPlayButton(false);
                    }
                  }}
                  className={`
                    relative shrink-0 overflow-hidden rounded-2xl
                    bg-black
                    transition-all duration-500 ease-out
                    ${
                      isCenter
                        ? `
                          h-[390px] w-[220px]
                          scale-100
                          opacity-100
                          shadow-2xl
                          ring-1 ring-border
                          cursor-pointer
                          sm:h-[500px] sm:w-[280px]
                        `
                        : `
                          hidden
                          h-[340px] w-[190px]
                          scale-90
                          opacity-40
                          sm:block
                          sm:h-[430px] sm:w-[235px]
                          cursor-pointer
                        `
                    }
                  `}
                >
                  {/* VIDEO */}
                  <video
                    ref={(video) => {
                      videoRefs.current[index] = video;
                    }}
                    src={src}
                    muted={isMuted}
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                    onPlay={() => {
                      if (index === activeIndex) {
                        setIsPlaying(true);
                      }
                    }}
                    onPause={() => {
                      if (index === activeIndex) {
                        setIsPlaying(false);
                      }
                    }}
                  />

                  {/* SIDE REEL OVERLAY */}
                  {!isCenter && (
                    <div className="pointer-events-none absolute inset-0 bg-background/30" />
                  )}

                  {/* CENTER BOTTOM GRADIENT */}
                  {isCenter && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
                  )}

                  {/* CENTER PLAY BUTTON */}
                  {isCenter && showPlayButton && !isPlaying && (
                    <div
                      className="
                        pointer-events-none
                        absolute left-1/2 top-1/2 z-20
                        flex h-16 w-16
                        -translate-x-1/2 -translate-y-1/2
                        items-center justify-center
                        rounded-full
                        bg-black/60
                        text-white
                        backdrop-blur-md
                        shadow-lg
                        animate-in fade-in zoom-in-90
                        duration-200
                      "
                    >
                      <Play className="ml-1 h-7 w-7 fill-current" />
                    </div>
                  )}

                  {/* SOUND BUTTON */}
                  {isCenter && (
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute reel" : "Mute reel"}
                      className="
                        absolute bottom-4 right-4 z-30
                        flex h-10 w-10
                        items-center justify-center
                        rounded-full
                        bg-black/60
                        text-white
                        backdrop-blur-md
                        transition-all duration-200
                        hover:bg-black/80
                        active:scale-95
                      "
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5" />
                      ) : (
                        <Volume2 className="h-5 w-5" />
                      )}
                    </button>
                  )}
                </div>
              );
            })}

          </div>

          {/* RIGHT ARROW */}
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