'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake timeout (2s) to simulate load
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Image
        src="/testline_logo_svg.jpg"
        alt="Loading..."
        width={200}
        height={200}
        priority
        className="fade-out"
      />
    </div>
  );
}
