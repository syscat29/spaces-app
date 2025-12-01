'use client';

import { Space } from '@/lib/types/space';
import Link from 'next/link';
import SpaceCard from './SpaceCard';

export default function Spaces({ spaces }: { spaces: Space[] }) {

  if (!spaces || spaces.length === 0) {
    return (
      <div className='py-12 text-center'>
        <p className='text-xl font-medium'>No spaces found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {spaces.map((space) => (
        <Link key={space.id} href={`/spaces/${space.id}/${space.slug}`}>
          <SpaceCard space={space} />
        </Link>
      ))}
    </div>
  );
}
