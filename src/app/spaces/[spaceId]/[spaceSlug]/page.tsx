import { Metadata } from 'next';
import { getSpace } from '@/server/spaces';
import { cache } from 'react';
import { notFound, redirect } from 'next/navigation';
import { Clock, MapPin, Users2 } from 'lucide-react';
import Link from 'next/link';
import SpaceAvailabilityCard from '@/features/spaces/components/SpaceAvailabilityCard';
import SpaceImageGrid from '@features/spaces/components/SpaceImageGrid';

// TODO: Make this a function and move to its own file
const getSpaceById = cache(getSpace);

export async function generateMetadata({
  params,
}: {
  params: { spaceId: string; spaceSlug: string };
}): Promise<Metadata> {
  const { spaceId } = await params;
  const space = await getSpaceById(spaceId);

  if (!space) {
    return {
      title: 'Space Not Found',
      description: 'The requested space could not be found.',
    };
  }

  return {
    title: space.title,
    description: space.description,
    openGraph: {
      type: 'website',
      title: space.title,
      description: space.description,
      siteName: 'Spaces',
      images: [
        {
          url: space.images[0],
          type: 'image/*',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: space.title,
      description: space.description,
      site: '@spacesapp',
      creator: '@spacesapp',
      images: [
        {
          url: space.images[0],
          type: 'image/*',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function SpacePage({
  params,
}: {
  params: { spaceId: string; spaceSlug: string };
}) {
  const { spaceId, spaceSlug } = await params;
  const space = await getSpaceById(spaceId);

  if (!space) {
    notFound();
  }

  if (space.slug !== spaceSlug) {
    redirect(`/spaces/${space.id}/${space.slug}`);
  }

  return (
    <section className='flex flex-col md:flex-row gap-6'>
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
      </div>
      <div className='shrink-0'>
        <SpaceAvailabilityCard space={space} />
      </div>
    </section>
  );
}
