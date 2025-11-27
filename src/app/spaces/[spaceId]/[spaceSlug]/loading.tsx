import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className='flex flex-col md:flex-row gap-6'>
      <div className='space-y-6 w-full'>
        {/* Title & Tags */}
        <div className='space-y-1'>
          <Skeleton className='h-10 w-lg' />
          <div className='flex items-center gap-2'>
            <Skeleton className='h-6 w-32' />
            <Skeleton className='h-6 w-32' />
          </div>
        </div>

        {/* Image Grid */}
        <div className='grid grid-cols-4 grid-rows-2 gap-3 h-[360px]  border-[#333]'>
          <Skeleton className='bg-black col-span-2 row-span-2' />
          <Skeleton className='bg-black' />
          <Skeleton className='bg-black' />
          <Skeleton className='bg-black' />
          <Skeleton className='bg-black' />
        </div>
        {/* Description */}
        <div className='space-y-2'>
          <Skeleton className='h-4 w-4/12 mb-4' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-3/4' />
        </div>
      </div>
      <div className='shrink-0'>
        <Skeleton className='w-90 h-64' />
      </div>
    </div>
  );
}
