"use client";

import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import { HTMLMotionProps } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface FadeAnimationProps extends HTMLMotionProps<"div"> {
  direction?: Direction;
  duration?: number;
  children: ReactNode;
}

// Dynamically import motion.div to ensure it's only used on the client side
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false },
);

const FadeAnimation: React.FC<FadeAnimationProps> = ({
  direction = "up",
  duration = 0.5,
  children,
  ...props
}) => {
  // Define variants for different directions
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
      transition={{ duration, ease: "easeInOut" }}
      {...props} // Spread other props to the motion.div
    >
      {children}
    </MotionDiv>
  );
};

export default FadeAnimation;
