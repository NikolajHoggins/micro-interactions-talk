"use client";
import "./globals.css";
import XIcon from "./components/XIcon";
import LinkedinIcon from "./components/LinkedinIcon";
import { motion } from "framer-motion";

const openAnimation = {
  y: 0,
  transition: {
    duration: 0.5,
    delay: 1,
    type: "spring",
    stiffness: 200,
    damping: 20,
  },
};
const closedAnimation = {
  y: 200,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          className="flex flex-col w-screen h-screen items-center justify-center bg-cover bg-center bg-no-repeat relative text-gray-800"
          style={{ backgroundImage: "url('/montery.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30" />

          <motion.div
            className="flex bg-white rounded-lg p-8 relative z-10 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            {children}
          </motion.div>
          <motion.div
            className="absolute bottom-4 right-4 px-4 py-2 text-center text-base bg-gray-200 rounded-lg shadow-lg font-semibold flex gap-6"
            initial={closedAnimation}
            animate={openAnimation}
            exit={closedAnimation}
          >
            <span className="flex items-center gap-2">
              <LinkedinIcon className="w-6 h-6 text-blue-500" />
              /nikolajhoggins
            </span>
            <span className="flex items-center gap-2">
              <XIcon className="w-6 h-6" />
              @hogginsio
            </span>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
