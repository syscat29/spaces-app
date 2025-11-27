export default function SpaceImageGrid({ images }: { images: string[] }) {
  return (
    <div className='grid grid-cols-4 grid-rows-2 gap-3 h-[360px]  border-[#333]'>
      <div className='bg-foreground col-span-2 row-span-2' />
      <div className='bg-foreground' />
      <div className='bg-foreground' />
      <div className='bg-foreground' />
      <div className='bg-foreground flex items-center justify-center text-white text-sm uppercase tracking-wide font-semibold'>
        view all
      </div>
    </div>
  );
}
