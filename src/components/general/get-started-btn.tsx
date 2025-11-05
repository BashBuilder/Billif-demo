import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { dashboardLink } from "@/data/links";

const GetStartedBtn = () => {
  return (
    <Link href={dashboardLink}>
      <Button className="bg-secondary">
        Start Free Trial
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </Link>
  );
};

export default GetStartedBtn;
