import Link from 'next/link';
import Container from './Container';
export default function Header() {
  return (
    <header>
      <Container className='flex items-center justify-between py-6'>
        <Link href='/'>
          <h1 className='relative bg-foreground text-background px-1.5 text-2xl uppercase font-black tracking-widest'>
            spaces
            <div className='absolute top-1 left-1 bg-card-shadow h-full w-full -z-10' />
          </h1>
        </Link>
      </Container>
    </header>
  );
}
