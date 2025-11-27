import Skeleton from '@/components/Skeleton';

export default function Loading() {
  return (
    <div className='space-y-6'>
      <Skeleton className='h-9 w-2xs' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Skeleton className='h-96' />
        <Skeleton className='h-96' />
        <Skeleton className='h-96' />
        <Skeleton className='h-96' />
        <Skeleton className='h-96' />
        <Skeleton className='h-96' />
      </div>
    </div>
  );
}
