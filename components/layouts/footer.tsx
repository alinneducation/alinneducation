import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-row justify-around mb-0 px-5 py-5 border-t border-gray-200 dark:border-gray-600 bg-slate-100 dark:bg-zinc-950 ">
      <div className="flex flex-col items-center w-full gap-2">
        <h3 className="font-semibold border-b-2 w-fit">Community</h3>
        <div className="flex flex-col md:flex-row justify-around w-full">
          <Link href={"https://www.facebook.com/"}>Facebook Page</Link>
          <div>YouTube Channel</div>
          <div>TikTok</div>
          <div>Telegram Channel</div>
        </div>
      </div>
      <div className="border-r-2"></div>
      <div className="flex flex-col items-center w-full gap-2 px-5">
        <h3 className="font-semibold border-b-2 w-fit">Contact Us</h3>
        <div className="flex flex-col md:flex-row justify-around w-full">
          <Link href={"https://www.facebook.com/"}>Messenger</Link>
          <div>Phone</div>
          <div>TikTok</div>
          <div>Telegram</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
