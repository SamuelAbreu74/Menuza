'use client';

import React from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  image?: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, image, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div onClick={(e) => {e.stopPropagation(); onClose();}} className="cursor-auto fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div onClick={(e) => {e.stopPropagation();}} className="rounded-4xl relative w-full max-w-md  bg-white shadow-xl dark:bg-gray-800 sm:m-4">
        {/* Cabeçalho do Modal */}
        <div className="flex items-center justify-end">
           {image && <Image src={image} alt="close" width={20} height={20} className="w-full sm:w-70 md:w-full object-cover rounded-t-4xl h-70"/>}
          <button onClick={onClose} className="absolute top-3 right-3 rounded-xl p-2 text-gray-400 hover:bg-amber-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Conteúdo do Modal */}
        <div className="flex flex-col gap-1 mt-2 p-6 text-gray-700 dark:text-gray-300">
        {title && <h3 className="text-sm font-semibold font-montserrat uppercase text-orange-800 dark:text-white">{title}</h3>}
          {children}
        </div>
      </div>
    </div>
  );
}
