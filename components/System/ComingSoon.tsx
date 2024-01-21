'use client'
import React, { useEffect, useState } from 'react'
import ThemeToggleSwitch from '../ThemeToggleSwitch'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ImaginecoreX from '@/public/ImaginecoreX.svg';
import ImaginecoreX_DarkMode from '@/public/ImaginecoreX-darkMode.svg';
import Image from 'next/image';
import SeaForest from '@/public/system/sea-forest.jpg';
import { Space_Grotesk, Grand_Hotel, Iceberg, Cormorant, Gugi, } from "next/font/google";
import ImageinecoreXLogoWhite from '@/public/system/ImaginecoreX-logo-white.svg';
import CountdownTimer from './CountdownTimer';

const spaceGrotesk = Space_Grotesk({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] });
const grandHotel = Grand_Hotel({ weight: ['400'], subsets: ['latin'] });
const iceBerg = Iceberg({ weight: ['400'], subsets: ['latin'] });
const cormorant = Cormorant({ weight: ['300','400','500','600','700'], subsets: ['latin'] });
const gugi = Gugi({ weight: ['400'], subsets: ['latin'] });

const ComingSoon = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(()=>console.log('current-theme-is-darkMode:'+isDarkMode),[isDarkMode]);


  return (
<>
<div className='min-h-screen w-full flex justify-center items-center flex-col dark:bg-[black] bg-white text-black dark:text-white overflow-hidden relative'>
      <Image src={SeaForest} fill alt='Background Image' className='object-cover' />

      <div className='z-50 bg-[#131E2B66] min-h-screen w-full overflow-hidden flex flex-col items-center justify-center relative'>

        <div className='box-border px-[60px] pt-[50px] nsTsm:px-[20px] nsTsm:pt-[24px] flex justify-between items-center absolute w-full top-0'>
          <div className={`${grandHotel.className} text-[36px] text-white nsTsm:text-[24px]`}>ImaginecoreX</div>
          <div className='w-[70px] h-[25.22px] nsTsm:w-[60px] nsTsm:h-[21.62px] relative'>
            <Image src={ImageinecoreXLogoWhite} fill alt='Background Image' className='object-cover' />
          </div>
        </div>


        <section className='w-full flex items-center flex-col mt-[-80px] nsTsm:mt-0'>
          <div className={`${iceBerg.className} text-[96px] text-white nsTsm:text-[36px] text-center`}>COMING SOON</div>
          <div className={`${cormorant.className} text-white text-[36px] font-normal nsTsm:text-[16px] text-center`}>The Team Of Imaginative Minds</div>
          <CountdownTimer targetDate='2024-01-01'/>
        </section>

        {/* bottom */}
        <div className='absolute flex justify-center w-full bottom-[80px] nsTsm:hidden'>
          <div className='p-[10px] border-[1px] border-white text-white   '>
            <div className={`${gugi.className} text-[12px] text-center`}>Building New Space...</div>
          </div>
        </div>

        {/* small screen ------------------------------------------------------------------------- */}
        <div className=' nsTsm:flex justify-center w-full bottom-[80px] hidden nsTsm:visible mt-[60px]'>
          <div className='p-[10px] border-[1px] border-white text-white   '>
            <div className={`${gugi.className} text-[12px] text-center`}>Building New Space...</div>
          </div>
        </div>

      </div>

    </div>
</>
  )
}

export default ComingSoon
