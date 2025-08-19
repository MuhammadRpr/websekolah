"use client"

import { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-lime-400 fixed w-full z-50 shadow">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src="/lgdi.png" alt="Logo" width={40} height={40} />
                </div>

                <div className="space-x-6 hidden md:flex">
                    <a href="#home" className="text-white">Home</a>
                    <a href="#tentang" className="text-white">Tentang</a>
                    <a href="#fasilitas" className="text-white">Fasilitas</a>
                    <a href="#agenda" className="text-white">Agenda</a>
                    <a href="#alamat" className="text-white">Alamat</a>
                </div>

                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-lime-300 flex flex-col items-center py-4 space-y-4">
                    <a href="#home" className="text-white" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#tentang" className="text-white" onClick={() => setIsOpen(false)}>Tentang</a>
                    <a href="#fasilitas" className="text-white" onClick={() => setIsOpen(false)}>Fasilitas</a>
                    <a href="#agenda" className="text-white" onClick={() => setIsOpen(false)}>Agenda</a>
                    <a href="#alamat" className="text-white" onClick={() => setIsOpen(false)}>Alamat</a>
                </div>
            )}
        </nav>
    );
}
