'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function SpaceImageGrid({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return <div className='w-full aspect-video bg-gray-200 rounded-lg' />;
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      e.preventDefault()

      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    });
  }

  return (
    <>
      <div
        className='relative w-full aspect-video group cursor-pointer'
        onClick={() => setIsModalOpen(true)}
      >
        <div className='relative w-full h-full overflow-hidden rounded-lg'>
          <Image
            src={images[currentIndex]}
            alt={`Space Image ${currentIndex + 1}`}
            fill
            className='object-cover transition-all duration-500'
            priority
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                prevImage(e);
              }}
              className='absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
              aria-label='Previous image'
            >
              <ChevronLeft className='w-6 h-6 text-gray-800' />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                nextImage(e);
              }}
              className='absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
              aria-label='Next image'
            >
              <ChevronRight className='w-6 h-6 text-gray-800' />
            </button>

            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-white w-4'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 h-full'>
          <button
            onClick={() => setIsModalOpen(false)}
            className='absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors cursor-pointer'
            aria-label='Close modal'
          >
            <X className='w-8 h-8' />
          </button>

          <div className='relative w-full max-w-5xl h-[70vh] mb-8'>
            <Image
              src={images[currentIndex]}
              alt={`Space Image ${currentIndex + 1}`}
              fill
              className='object-contain'
              priority
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className='absolute left-0 top-1/2 -translate-y-1/2 p-4 text-white/70 hover:text-white transition-colors cursor-pointer'
                >
                  <ChevronLeft className='w-10 h-10' />
                </button>
                <button
                  onClick={nextImage}
                  className='absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white/70 hover:text-white transition-colors'
                >
                  <ChevronRight className='w-10 h-10' />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          <div className='w-full max-w-3xl overflow-x-auto flex gap-4 p-2 scrollbar-hide'>
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative shrink-0 w-20 h-20 rounded-md overflow-hidden transition-all duration-300 ${
                  idx === currentIndex
                    ? 'ring-2 ring-white opacity-100'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className='object-cover'
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
