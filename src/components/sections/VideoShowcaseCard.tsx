"use client";

import { useEffect, useRef, useState } from "react";

type VideoShowcaseCardProps = {
  ariaLabel: string;
  aspectRatio?: string;
  className?: string;
  mp4Src: string;
  posterSrc: string;
  webmSrc: string;
};

export function VideoShowcaseCard({
  ariaLabel,
  aspectRatio = "16 / 9",
  className,
  mp4Src,
  posterSrc,
  webmSrc,
}: VideoShowcaseCardProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1366px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateDesktop = () => setIsDesktop(desktopQuery.matches);
    const updateMotion = () => setPrefersReducedMotion(motionQuery.matches);

    updateDesktop();
    updateMotion();

    desktopQuery.addEventListener("change", updateDesktop);
    motionQuery.addEventListener("change", updateMotion);

    return () => {
      desktopQuery.removeEventListener("change", updateDesktop);
      motionQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || !shellRef.current) {
      setIsInView(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "160px 0px",
        threshold: 0.2,
      },
    );

    observer.observe(shellRef.current);

    return () => observer.disconnect();
  }, [isDesktop]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (isDesktop && isInView && !prefersReducedMotion) {
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {
          // Autoplay can be rejected if the browser temporarily delays media start.
        });
      }
      return;
    }

    video.pause();
  }, [isDesktop, isInView, prefersReducedMotion]);

  const shouldRenderMedia = isDesktop && isInView;
  const shouldAutoplay = shouldRenderMedia && !prefersReducedMotion;

  return (
    <div ref={shellRef} className={["video-showcase-card", className].filter(Boolean).join(" ")}>
      <div className="video-showcase-card__frame" aria-label={ariaLabel} role="img" style={{ aspectRatio }}>
        {shouldRenderMedia ? <img alt="" className="video-showcase-card__poster" decoding="async" loading="eager" src={posterSrc} /> : null}
        {shouldAutoplay ? (
          <video
            ref={videoRef}
            aria-hidden="true"
            autoPlay
            className="video-showcase-card__media"
            loop
            muted
            playsInline
            poster={posterSrc}
            preload="metadata"
          >
            <source src={webmSrc} type="video/webm" />
            <source src={mp4Src} type="video/mp4" />
          </video>
        ) : null}
        {!shouldRenderMedia ? <div className="video-showcase-card__placeholder" aria-hidden="true" /> : null}
      </div>
    </div>
  );
}
