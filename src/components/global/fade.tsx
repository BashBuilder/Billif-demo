import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface FadeAnimationProps extends HTMLMotionProps<"div"> {
  direction?: Direction;
  duration?: number;
  children: ReactNode;
}

const FadeAnimation: React.FC<FadeAnimationProps> = ({
  direction = "up",
  duration = 0.5,
  children,
  ...props
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration, ease: "easeInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimation;
