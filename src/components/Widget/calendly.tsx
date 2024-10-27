"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding?: boolean;
      }) => void;
    };
  }
}

const CalendlyWidget: React.FC = () => {
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
      // @ts-expect-error "initit popup widget type is not supported"
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/getnextgen/30min?primary_color=f57c00",
      });
    }
  };

  return (
    <a
      href="#"
      onClick={handleDemoRequest}
      className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-primary/80"
    >
      Request Demo
    </a>
  );
};

export default CalendlyWidget;
