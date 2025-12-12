/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string;
        // text: string;
        // color: string;
        // textColor: string;
        // branding?: boolean;
      }) => void;
    };
  }
}

interface CalendlyWidgetProps {
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | "secondary";
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
}

const CalendlyWidget: React.FC = ({
  variant = "default",
  size = "default",
}: CalendlyWidgetProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.css";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleDemoRequest = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/getnextgen/billif-demo",
      });
    }
  };

  return (
    <Button
      variant={variant || "default"}
      size={size || "default"}
      className="w-fit"
    >
      <Link
        href="https://calendly.com/getnextgen/billif-demo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Request Demo
      </Link>
      {/* <a href="#" onClick={handleDemoRequest}>
        Request Demo
      </a> */}
    </Button>
  );
};

export default CalendlyWidget;
