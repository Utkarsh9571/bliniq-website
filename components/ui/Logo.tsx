import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className = "w-36 h-10" }: LogoProps) {
  return (
    <div className={`relative flex items-center select-none ${className}`}>
      <Image
        src="/images/website/logo.png"
        alt="BLINIQ Aesthetic Clinic Logo"
        width={180}
        height={54}
        className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(234,179,8,0.15)]"
        priority
      />
    </div>
  );
}
