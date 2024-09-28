import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <div> page is not found NotFound</div>
      <Button>
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
