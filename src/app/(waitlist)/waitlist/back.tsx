"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const GoBack = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="absolute left-6 top-6 flex items-center gap-2 rounded-md bg-white/10 p-2 text-sm text-white"
    >
      <ChevronLeft />
      <span>Go back</span>
    </button>
  );
};

export default GoBack;
