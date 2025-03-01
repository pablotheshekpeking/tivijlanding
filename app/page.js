'use client'
import { useState } from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaShopify, FaBlog } from "react-icons/fa"
import SignupForm from "./components/SignupForm"
import Image from 'next/image'
import ImageModal from './components/ImageModal';

const links = [
  { title: "Free Retreat Guide - Mental Detox", url: "#" },
  { title: "Buy Makeup Artiste - Client Questionaire", url: "#" },
  { title: "Understand Product Grading (Hot Products)", url: "#" },
  { title: "Learn Makeup in 5 days ", url: "#" },
  { title: "Benefits of Journaling - How to Know your thankful through ", url: "#" },
]

const socialIcons = [
  { Icon: FaTwitter, url: "#" },
  { Icon: FaInstagram, url: "#" },
  { Icon: FaLinkedin, url: "#" },
  { Icon: FaYoutube, url: "#" },
  { Icon: FaShopify, url: "#" },
  { Icon: FaBlog, url: "#" },
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
      <div className="w-full max-w-md space-y-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            width={700}
            height={700}
            src="/tivij.png"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setIsModalOpen(true)}
          />
          <ImageModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            imageUrl="/tivij.png"
          />
          <h1 className="text-2xl font-bold">Tivij</h1>
          <p className="text-center text-sm">Digital creator | Lover of God | Beauty enthusiast</p>
          <div className="flex space-x-4">
            {socialIcons.map(({ Icon, url }, index) => (
              <a key={index} href={url} className="text-white hover:text-pink-200 transition-colors">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="block w-full py-3 px-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-center font-medium transition-all duration-200 hover:shadow-lg"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Add this before the closing div */}
        <div className="mt-8">
          <SignupForm />
        </div>

        <div className="mt-8">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-center text-sm"><a href="#" className="text-pink-200 hover:text-pink-300 transition-colors" target="_blank" rel="noopener noreferrer">@BeautyByTivij</a>, All rights reserved. Developed by <a href="https://pebbleinc.vercel.app/" className="text-pink-200 hover:text-pink-300 transition-colors" target="_blank" rel="noopener noreferrer">PebbleInc</a></p>
          </div>
        </div>
      </div>
    </main>
  )
}

