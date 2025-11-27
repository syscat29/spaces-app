'use client';

import { useRouter } from 'next/navigation';

export default function ReturnButton() {
  const router = useRouter();

  function onReturn() {
    router.back();
  }

  return (
    <button
      onClick={onReturn}
      className='relative borderborder-none bg-foreground text-background text-xs uppercase font-bold px-6 py-3 tracking-widest cursor-pointer group'
    >
      <div className='absolute w-full h-full bg-card-shadow top-1 left-1 -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1' />
      &lt; go back
    </button>
  );
}
