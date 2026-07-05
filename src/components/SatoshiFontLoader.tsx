'use client';

import { useEffect } from 'react';

const SATOSHI_HREF = 'https://api.fontshare.com/v2/css?f[]=satoshi@700,900&display=swap';

export default function SatoshiFontLoader() {
  useEffect(() => {
    if (document.querySelector(`link[href="${SATOSHI_HREF}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = SATOSHI_HREF;
    document.head.appendChild(link);
  }, []);

  return null;
}
