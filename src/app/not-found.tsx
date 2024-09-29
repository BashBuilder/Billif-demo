import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center text-center">
      <div className="space-y-5">
        <p className="font-heading text-orange-dark text-2xl font-semibold">
          Sorry page not found
        </p>
        <p className="text-sm text-gray-500">
          It seems like you&apos;re trying to access something that doesn&apos;t
          exist.
        </p>
      </div>
      <div className="pt-6">
        <Button>
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
