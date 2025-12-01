import Card from '@/components/Card';
import { Space } from '@/lib/types/space';

export default function SpaceAvailabilityCard({ space }: { space: Space }) {
  return (
    <div className='sticky top-4'>
      <Card className='w-full sm:w-90 px-6 py-8 flex flex-col'>
        <div className='mb-6 text-center space-y-2 text-[#888]'>
          <p className='text-sm'>Add details to view total price</p>
          <p>
            <span className='text-3xl font-bold text-white'>
              ${space.price}
            </span>
            <span>/hr</span>
          </p>
        </div>
        <button className='border-none bg-white text-foreground px-4 py-2 uppercase text-sm cursor-pointer font-semibold transition-colors duration-200 tracking-wide hover:bg-[#ccc]'>
          check availability
        </button>

        <div className='pt-2 mt-4 border-t border-[#333] text-sm text-center text-[#888]'>
          <p>Response time is within 2 hours.</p>
          <p>You won&apos;t be charged yet.</p>
        </div>
      </Card>
    </div>
  );
}
