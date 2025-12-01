import SearchBar from '@/features/spaces/components/SearchBar';
import Spaces from '@/features/spaces/components/Spaces';
import { getSpaces } from '@/features/spaces/services/fetchSpaces';
import SearchBarsSkeleton from '@/features/spaces/skeletons/SearchBarSkeleton';
import SpacesSkeleton from '@/features/spaces/skeletons/SpacesSkeleton';
import { Suspense } from 'react';

interface PageProps {
  searchParams: {
    q?: string;
    city?: string;
  };
}

export default async function SpacesPage({ searchParams }: PageProps) {
  const spaceName = (await searchParams).q || '';
  const spaceCity = (await searchParams).city || '';

  const spaces = await getSpaces(spaceName, spaceCity);

  return (
    <section className='space-y-6'>
      <h2 className='text-3xl font-bold'>Popular Spaces</h2>
      <Suspense fallback={<SearchBarsSkeleton />}>
        <SearchBar initialName={spaceName} initialCity={spaceCity} />
      </Suspense>

      <Suspense fallback={<SpacesSkeleton />}>
        <Spaces spaces={spaces} />
      </Suspense>
    </section>
  );
}
