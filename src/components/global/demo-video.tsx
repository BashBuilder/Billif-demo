"use client";

import { useEffect, useRef, useState } from "react";

export default function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // Start autoplay muted always
    vid.muted = true;
    vid.play().catch(() => {});

    // Detect any user interaction on page (enables audio)
    const enableInteraction = () => setUserInteracted(true);

    window.addEventListener("click", enableInteraction, { once: true });
    window.addEventListener("touchstart", enableInteraction, { once: true });

    // Intersection Observer → when video enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && userInteracted) {
            // Turn on sound when visible
            vid.muted = false;
            vid.play().catch(() => {});
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(vid);

    // Hover OR Click → toggle mute/unmute
    const toggleSound = () => {
      vid.muted = !vid.muted;
      vid.play().catch(() => {});
    };

    // vid.addEventListener("mouseenter", toggleSound);
    // vid.addEventListener("mouseleave", toggleSound);
    vid.addEventListener("click", toggleSound);

    return () => {
      observer.disconnect();
      // vid.removeEventListener("mouseenter", toggleSound);
      // vid.removeEventListener("mouseleave", toggleSound);
      vid.removeEventListener("click", toggleSound);
    };
  }, [userInteracted]);

  return (
    <video
      ref={videoRef}
      className="w-full rounded-2xl border border-border/30 shadow-xl"
      autoPlay
      loop
      playsInline
      // hide controls
      controls={false}
    >
      <source
        src="/video/Video_20251205_100646 (1) (1) (1).mp4"
        type="video/mp4"
      />
    </video>
  );
}
