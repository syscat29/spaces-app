import Skeleton from '@/components/Skeleton';

export default function SpacesSkeleton() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      <Skeleton className='h-96' />
      <Skeleton className='h-96' />
      <Skeleton className='h-96' />
      <Skeleton className='h-96' />
      <Skeleton className='h-96' />
      <Skeleton className='h-96' />
    </div>
  );
}
