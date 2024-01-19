import Image from 'next/image';

import React from 'react'

export default function Logo() {
  return (
    <Image
        height={200}
        width={200}
        src="/logo.svg"
        alt="Logo"
        quality={95}
    />
  )
}
