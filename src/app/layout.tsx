import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';

const geistSans = Inter({
  subsets: ['latin'],
});

interface LayoutProps {
  children: React.ReactNode;
}

const metadataUrl = process.env.NEXT_PUBLIC_APP_URL!;

export const metadata: Metadata = {
  title: {
    default: 'Spaces - Renting spaces made easy',
    template: '%s - Spaces',
  },
  description: 'Renting spaces made easy',
  metadataBase: new URL(metadataUrl),
  openGraph: {
    title: 'Spaces',
    description: 'Renting spaces made easy',
    images: [
      {
        url: '/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spaces',
    description: 'Renting spaces made easy',
    images: [
      {
        url: '/og-image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.className} relative flex flex-col min-h-screen antialiased`}
      >
        <Header />
        <Container className='py-12'>{children}</Container>
      </body>
    </html>
  );
}
