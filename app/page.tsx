'use client'

import Live from '@/components/Live'
import { CollaborativeApp } from './CollaborativeApp'
import Navbar from '@/components/Navbar'
import LeftSidebar from '@/components/LeftSidebar'
import RightSidebar from '@/components/RightSidebar'

export default function Page() {
  return (
    <main className='h-screen overflow-hidden'>
      <Navbar />

      <section className='flex h-full'>
        <LeftSidebar />
        <Live />
        <RightSidebar />
      </section>
    </main>
  )
}
