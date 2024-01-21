'use client'
import HomeDesign from '@/components/Home/HomeDesign';
import NavBar from '@/components/NavBar';
import ComingSoon from '@/components/System/ComingSoon';
import MaintenancePage from '@/components/System/MaintenancePage';
import ThemeToggleSwitch from '@/components/ThemeToggleSwitch'
import { ThemeProvider } from '@/context/ThemeContext';
import Image from 'next/image'
import { useState } from 'react';

type SystemUpdateOptions = 'maintain' | 'deploy' | 'coming soon';


export default function Home() {
  const [systemUpdate, setSystemUpdate] = useState<SystemUpdateOptions>('deploy');


  return (

    <>
      {systemUpdate === 'maintain' ?
        <main >
          <MaintenancePage />
        </main>
        : systemUpdate === 'coming soon' ?
          <main >
            <ComingSoon />
          </main>
          :
          <ThemeProvider>
          <main className="flex min-h-screen  flex-col items-center dark:bg-black  bg-icx-primary dark:bg-icx-primary-dark overflow-hidden">
           <NavBar/>

          <HomeDesign/>

           <ThemeToggleSwitch/>


          </main>
          </ThemeProvider>
      }
    </>

  )
}
