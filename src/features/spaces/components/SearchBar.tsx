'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useDebounce } from '@/lib/hooks/useDebounce';
import Card from '@/components/Card';

interface SearchProps {
  initialName?: string;
  initialCity?: string;
}

export default function SearchBar({
  initialName = '',
  initialCity = '',
}: SearchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [name, setName] = useState(initialName);
  const [city, setCity] = useState(initialCity);

  const debouncedName = useDebounce(name, 300);

  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  useEffect(() => {
    setCity(initialCity);
  }, [initialCity]);

  const updateUrl = (newName: string, newCity: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (newName) {
      current.set('q', newName);
    } else {
      current.delete('q');
    }

    if (newCity && newCity !== 'all') {
      current.set('city', newCity);
    } else {
      current.delete('city');
    }

    router.push(`${pathname}?${current.toString()}`);
  };

  useEffect(() => {
    updateUrl(debouncedName, city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedName, city]);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleCity(e: ChangeEvent<HTMLSelectElement>) {
    setCity(e.target.value);
  }

  return (
    <Card className='flex flex-col sm:flex-row gap-4 items-center p-4'>
      <div className='flex-1 space-y-1'>
        <label className='text-xs text-background uppercase tracking-widest block'>
          Name
        </label>
        <input
          onChange={(e) => handleSearch(e)}
          type='text'
          placeholder='Enter name to search'
          className='w-full bg-[#0a0a0a] border border-[#333] text-[#b3b3b3] px-3 py-2 text-xs focus:outline-none focus:border-[#555] focus:bg-black transition-all placeholder-[#555]'
        />
      </div>
      <div className='w-full sm:w-fit space-y-1'>
        <label className='text-xs text-background uppercase tracking-widest block'>
          City
        </label>
        <select
          onChange={handleCity}
          id='city'
          className='w-full bg-[#0a0a0a] border border-[#333] text-[#b3b3b3] px-3 py-2 text-xs focus:outline-none focus:border-[#555] focus:bg-black transition-all placeholder-[#555]'
        >
          <option value='all'>All</option>
          <option value='austin'>Austin</option>
          <option value='boston'>Boston</option>
          <option value='chicago'>Chicago</option>
          <option value='los angeles'>Los Angeles</option>
          <option value='malibu'>Malibu</option>
          <option value='miami'>Miami</option>
          <option value='new york'>New York</option>
          <option value='san francisco'>San Francisco</option>
          <option value='seattle'>Seattle</option>
        </select>
      </div>
    </Card>
  );
}
