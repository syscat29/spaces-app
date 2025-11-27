import { Space } from '@/lib/types/space';
import Link from 'next/link';
import SpaceCard from './SpaceCard';

export default function SpacesGrid({ spaces }: { spaces: Space[] }) {
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
