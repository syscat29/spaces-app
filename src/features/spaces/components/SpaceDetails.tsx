import { Space } from '@/lib/types/space';

export default function SpaceDetails({ space }: { space: Space }) {
  return (
    <div className=''>
      <h1>{space.title}</h1>
      <p>{space.description}</p>
    </div>
  );
}
