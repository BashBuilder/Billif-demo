"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { CookingPot } from "lucide-react";

const CookieModal = () => {
  const [open, setOpen] = useState(false);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const cookiesAccepted = localStorage.getItem("cookiesAccepted");
      if (cookiesAccepted !== "true") {
        setOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open}>
      <DialogContent>
        {/* // create a cookie modal that informs the user about ar ap cookies and has a button to accept cookies */}
        <div className="flex flex-col items-center p-4">
          <CookingPot className="mx-auto size-16" />
          <h2 className="mb-2 text-lg font-semibold">We use cookies</h2>
          <p className="mb-4 text-center text-sm text-gray-600">
            Billif uses cookies to enhance your experience, analyze site usage,
            and assist in our marketing efforts. By clicking &apos;Accept&apos;,
            you consent to our use of cookies.
          </p>
          <Button className="rounded-full" onClick={handleAcceptCookies}>
            Accept
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieModal;
