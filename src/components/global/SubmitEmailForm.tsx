"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SubmitEmailForm = () => {
  return (
    <form className="relative w-11/12 rounded-full bg-orange-100 p-2 shadow-md">
      <Input
        type="email"
        placeholder="What's your business email?"
        className="rounded-full border-none bg-transparent pr-44 outline-none ring-0 ring-transparent"
      />
      <Button className="absolute right-2 top-1/2 -translate-y-1/2">
        Get started for free
      </Button>
    </form>
  );
};

export default SubmitEmailForm;
