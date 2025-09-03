"use client";

import { useEffect } from "react";
import { Button } from "../ui/button";

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
    script.src = "https://assets.calendly.com/assets/external/widget.js";
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
        url: "https://calendly.com/getBill-if/30min?primary_color=f57c00",
      });
    }
  };

  return (
    <Button variant={variant || "default"} size={size || "default"}>
      <a
        href="#"
        onClick={handleDemoRequest}
        // className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-primary/80"
      >
        Request Demo
      </a>
    </Button>
  );
};

export default CalendlyWidget;
