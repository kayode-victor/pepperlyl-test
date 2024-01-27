"use client";
import { motion } from "framer-motion";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="w-full p-4 lg:p-10 flex flex-col min-h-screen">
      <div className="mb-10 lg:mb-5">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center lg:gap-y-3 gap-y-5">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-white text-3xl lg:text-5xl font-bold text-center"
        >
          COMING SOON
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-white lg:text-2xl text-lg font-normal"
        >
          Unlock Endless Creativity in First NFT & Metaverse Marketplace
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" lg:w-6/12 md:w-5/6 opacity-65 text-center text-opacity-50 text-white lg:text-lg sm:text-sm font-normal"
        >
          We are currently building Pepperlyl - NFT & Metaverse Marketplace. An
          ecosystem for web3 gaming, NFT artists, digital artists, art
          collectors, gamers, and game developers. Kindly bear with us.
        </motion.div>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 items-center justify-center lg:pt-8 pt-5"
        >
          <div>
            <Button />
          </div>
          <div className="opacity-60 text-white text-sm font-normal">
            1000 others just joined
          </div>
        </motion.div>
      </div>
      <div className="mt-auto pb-8 lg:pb-5">
        <Footer />
      </div>
    </main>
  );
}
