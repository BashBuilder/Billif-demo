"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Demo = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Request Demo</Button>
      </DialogTrigger>
      <DialogContent>
        <iframe
          width="540"
          height="500"
          src="https://f7592642.sibforms.com/serve/MUIFAHnQVYSDzLiyJOHJPG2gHykgFjKNMZtIha08ekLxV9ptj6AX0DPZ6jz7qs7mvCEglw2rGYAZhd37iGqyek01K3bGCCBh3Mh_2mZj35nM8WzxJqJKLAZfK03zOqXOuB7USTEJ0uEFlQaiiAt4oqFQj7rtVj0CGicn6lfaPDcyBy1JcGx14XxrGppfTb8lyBMpe1CIlAr7VyJ8"
          frameBorder="0"
          scrolling="auto"
          allowFullScreen
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "100%",
            // height: "100%",
          }}
        ></iframe>
        {/* <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader> */}
      </DialogContent>
    </Dialog>
  );
};

export default Demo;
