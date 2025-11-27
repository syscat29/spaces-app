import SpacesGrid from '@/features/spaces/components/SpacesGrid';
import { getSpaces } from '@/server/spaces';
import { cache } from 'react';

const getSpacesWithCache = cache(getSpaces);

export default async function Home() {
  const spaces = await getSpacesWithCache();

  return (
    <section className='space-y-6'>
      <h2 className='text-3xl font-bold'>Popular Spaces</h2>
      <SpacesGrid spaces={spaces} />
    </section>
  );
}
