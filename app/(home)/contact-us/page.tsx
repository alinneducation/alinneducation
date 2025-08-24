"use client";
import React from "react";
const SIDEBAR_WIDTH_MOBILE = "18rem";
export default function Page() {
  const [openMobile, setOpenMobile] = React.useState(false);

  return (
    <div className="flex w-full h-full items-center justify-center">
      <h1 className="text-4xl">Contact Page</h1>
    </div>
  );
}
