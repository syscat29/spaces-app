import { Space } from '@/lib/types/space';
import { Clock, MapPin, Users2 } from 'lucide-react';
import SpaceImageGrid from './SpaceImageGrid';
import SpaceAvailabilityCard from './SpaceAvailabilityCard';
import Image from 'next/image';
import Link from 'next/link';

export default function SpaceDetails({ space }: { space: Space }) {
  return (
    <section className='flex flex-col md:flex-row gap-12 md:gap-6'>
      <div className='space-y-6'>
        <div className='space-y-1'>
          <h2 className='text-4xl font-bold'>{space.title}</h2>
          <div className='flex items-center gap-4'>
            <Link
              href='#'
              className='flex items-center gap-1 underline underline-offset-4 group'
            >
              <MapPin className='size-5' />
              <span className='group-hover:opacity-75'>{space.city}</span>
            </Link>
            <div className='flex items-center gap-1'>
              <Users2 className='size-5' />
              <span>{space.capacity} guests</span>
            </div>
            <div className='flex items-center gap-1'>
              <Clock className='size-5' />
              <span>4 hours min</span>
            </div>
          </div>
        </div>

        <SpaceImageGrid images={space.images} />

        <div className='space-y-2'>
          <h3 className='text-lg font-semibold'>About this space</h3>
          <p className='leading-relaxed'>{space.description}</p>
        </div>

        <div className='space-y-2'>
          <h3 className='text-lg font-semibold'>Features</h3>
          <p className='leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            voluptatem harum ducimus quod illo vero cupiditate sit eum dolorum?
            Fugiat laudantium doloribus quod placeat est cumque consectetur,
            enim praesentium repellendus?
          </p>
        </div>

        <div className='space-y-2'>
          <h3 className='text-lg font-semibold'>Location</h3>
          <div className='relative aspect-video'>
            <Image src={'/map.jpg'} alt={space.title} loading='lazy' fill />
          </div>
        </div>
      </div>

      <div className='shrink-0'>
        <SpaceAvailabilityCard space={space} />
      </div>
    </section>
  );
}
