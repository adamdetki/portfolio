'use client';

import Flex from '@components/shared/flex';
import Link from 'next/link';

export default function Header() {
  return (
    <Flex className='flex-row sticky top-0 z-50 bg-green shadow-sm justify-end'>
      <nav className='flex gap-4 p-4'>
        <Link href='/projects' className='font-bold'>
          Projects
        </Link>
        <Link href='/blog' className='font-bold'>
          Blog
        </Link>
      </nav>
    </Flex>
  );
}
