import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='container mx-auto p-4 text-center'>
      <h2 className='text-4xl font-bold mb-4'>404 - Space Not Found</h2>
      <p className='text-lg mb-4'>Could not find the requested space.</p>
      <Link href='/'>
        <span className='text-blue-600 hover:underline'>Return to homepage</span>
      </Link>
    </div>
  );
}
