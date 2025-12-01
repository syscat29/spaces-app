import { Metadata } from 'next';
import { cache } from 'react';
import { notFound } from 'next/navigation';
import SpaceDetails from '@/features/spaces/components/SpaceDetails';
import { getSpace } from '@/features/spaces/services/fetchSpace';

// TODO: Make this a function and move to its own file
const getSpaceById = cache(getSpace);

export async function generateMetadata({
  params,
}: {
  params: { spaceId: string };
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
  };
}

export default async function SpacePage({
  params,
}: {
  params: { spaceId: string; spaceSlug: string };
}) {
  const { spaceId, spaceSlug } = await params;
  const space = await getSpaceById(spaceId);

  /*
    Redirect to not-found if:
      - Space is not found
      - Space id does not match it's slug
  */
  if (!space || space.slug !== spaceSlug) {
    notFound();
  }

  return <SpaceDetails space={space} />;
}
