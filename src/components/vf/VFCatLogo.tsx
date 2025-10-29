'use client';

import React from 'react';
import Image from 'next/image';

interface VFCatLogoProps {
  className?: string;
  size?: number;
}

export const VFCatLogo: React.FC<VFCatLogoProps> = ({ className = '', size = 100 }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <Image 
      src="/images/logo-vinculo-felino.png" 
      alt="Logo Vínculo Felino" 
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  </div>
);

