import { Space } from '@/lib/types/space';
import Image from 'next/image';

export default function SpaceCard({ space }: { space: Space }) {
  return (
    <div className='relative group bg-foreground text-[#666] h-full'>
      <div className='absolute -z-10 w-full h-full top-2 left-2 bg-card-shadow transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1' />

      <div className='grid p-6'>
        <div className='border border-border mb-4 relative aspect-video transition-colors duration-300 group-hover:border-[#555]'>
          <Image
            src={space.images[0]}
            alt={space.title}
            fill
            className='bg-cover'
          />
        </div>

        <h2 className='text-xl font-extrabold text-white truncate'>
          {space.title}
        </h2>

        <div className='grid grid-cols-2 gap-y-1 py-2 uppercase text-sm'>
          <div className='flex items-center gap-1'>
            <span className='font-bold'>loc:</span>
            <span>{space.city}</span>
          </div>
          <div className='flex items-center gap-1'>
            <span className='font-bold'>cap:</span>
            <span>{space.capacity} gst</span>
          </div>
          <div className='flex items-center gap-1 uppercase'>
            <span className='font-bold'>time:</span>
            <span>4 hrs min</span>
          </div>
        </div>

        <div className='border-t border-[#333] pt-2'>
          <span className='text-xs font-black uppercase tracking-wider'>
            price
          </span>
          <div className='flex items-baseline gap-1'>
            <span className='text-lg text-white'>${space.price}</span>
            <span className='text-sm font-black'>/hr</span>
          </div>
        </div>
      </div>
    </div>
  );
}
