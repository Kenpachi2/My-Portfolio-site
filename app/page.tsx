'use client';

import dynamic from 'next/dynamic';

const PortfolioContent = dynamic(() => import('@/components/portfolio-content'), {
  ssr: false,
  loading: () => <div style={{ background: '#0a0d0f', minHeight: '100vh' }} />,
});

export default function Home() {
  return <PortfolioContent />;
}
