'use client'
import React from "react";
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative overflow-hidden flex flex-col justify-center align-middle items-center text-center ">
      <div className="max-w-2xl">
        <h1 className="text-4xl lg:text-7xl font-bold z-10 ">Contact Us</h1>
        <p className="text-neutral-500 max-w-lg my-4 mx-auto text-center"> We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.</p>
      <div className="form space-y-4 mt-4">
        <input type="email" name="" id="" className="w-full rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 p-4 bg-neutral-950 placeholder:text-neutral-700" placeholder="Enter Yor Email Address" />

        <textarea placeholder="Your Message"className="w-full rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 p-4 bg-neutral-950 placeholder:text-neutral-700"  ></textarea>

        <button type="submit" className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">Send Message</button>
        <Meteors number={100}/>
      </div>
      </div>
      </div>
  )
}

export default page