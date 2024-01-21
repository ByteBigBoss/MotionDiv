'use client'
import React, { useEffect, useState } from 'react'
import { Gugi } from "next/font/google";

const gugi = Gugi({ weight: ['400'], subsets: ['latin'] });


interface CountdownTimerProps {
  targetDate: string; // Format: 'YYYY-MM-DD'
}



const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateInitialCountdown = (): number => {
    const targetTime = new Date(targetDate).getTime();
    const currentTime = new Date().getTime();
    const initialCountdown = Math.floor((targetTime - currentTime) / 1000);

    return initialCountdown > 0 ? initialCountdown : 0;
  };

  const [countdown, setCountdown] = useState<number>(calculateInitialCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number): { days: number; hours: number; minutes: number; seconds: number } => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return { days, hours, minutes, seconds: remainingSeconds };
  };

  const { days, hours, minutes, seconds } = formatTime(countdown);


  return (
    <>
    <div className='flex items-center gap-[12px] mt-[43px] nsTsm:hidden'>

{/* days */}
<div className='w-[140px] h-[140px] flex justify-center items-center flex-col gap-[0px] rounded-[4px] bg-[#0530394D] border-[1px] border-white backdrop-blur-[6px] text-white'>
  <div className={` text-[64px] text-center`} >{`${String(days).padStart(2, '0')}`}</div>
  <div className={`text-[14px] ${gugi.className}`}>DAYS</div>
</div>


{/* Hours */}
<div className='w-[140px] h-[140px] flex justify-center items-center flex-col gap-[0px] rounded-[4px] bg-[#0530394D] border-[1px] border-white backdrop-blur-[6px] text-white'>
  <div className={` text-[64px] text-center`} >{`${String(hours).padStart(2, '0')}`}</div>
  <div className={`text-[14px] ${gugi.className}`}>HOURS</div>
</div>



{/* Minutes */}
<div className='w-[140px] h-[140px] flex justify-center items-center flex-col gap-[0px] rounded-[4px] bg-[#0530394D] border-[1px] border-white backdrop-blur-[6px] text-white'>
  <div className={` text-[64px] text-center`} >{`${String(minutes).padStart(2, '0')}`}</div>
  <div className={`text-[14px] ${gugi.className}`}>MIN</div>
</div>


{/* Seconds */}
<div className='w-[140px] h-[140px] flex justify-center items-center flex-col gap-[0px] rounded-[4px] bg-[#0530394D] border-[1px] border-white backdrop-blur-[6px] text-white'>
  <div className={` text-[64px] text-center`} >{`${String(seconds).padStart(2, '0')}`}</div>
  <div className={`text-[14px] ${gugi.className}`}>SEC</div>
</div>

</div>

{/* small screen ------------------------------------------------------------------------------------------------------- */}

<div className='nsTsm:flex items-center gap-[12px] mt-[43px] nsTsm:visible hidden'>

{/* days */}
<div className='flex flex-col items-center gap-[6px] text-white'>
<div className='w-[52px] h-[52px] flex justify-center items-center flex-col gap-[0px] rounded-[4px] bg-[#0530394D] border-[1px] border-white backdrop-blur-[6px] text-white'>
  <div className={` text-[24px] text-center`} >{`${String(days).padStart(2, '0')}`}</div>
</div>
<div className={`text-[12px] ${gugi.className}`}>DAYS</div>
</div>


{/* Hours */}
<div className='flex flex-col items-center gap-[6px] text-white'>
<div className='w-[52px] h-[52px] flex justify-center items-center flex-col gap-[0px] rounded-[4px] bg-[#0530394D] border-[1px] border-white backdrop-blur-[6px] text-white'>
  <div className={` text-[24px] text-center`} >{`${String(hours).padStart(2, '0')}`}</div>
</div>
<div className={`text-[12px] ${gugi.className}`}>HOURS</div>
</div>



{/* Minutes */}
<div className='flex flex-col items-center gap-[6px] text-white'>
<div className='w-[52px] h-[52px] flex justify-center items-center flex-col gap-[0px] rounded-[4px] bg-[#0530394D] border-[1px] border-white backdrop-blur-[6px] text-white'>
  <div className={` text-[24px] text-center`} >{`${String(minutes).padStart(2, '0')}`}</div>
</div>
<div className={`text-[12px] ${gugi.className}`}>MIN</div>
</div>



{/* Seconds */}
<div className='flex flex-col items-center gap-[6px] text-white'>
<div className='w-[52px] h-[52px] flex justify-center items-center flex-col gap-[0px] rounded-[4px] bg-[#0530394D] border-[1px] border-white backdrop-blur-[6px] text-white'>
  <div className={` text-[24px] text-center`} >{`${String(seconds).padStart(2, '0')}`}</div>
</div>
<div className={`text-[12px] ${gugi.className}`}>SEC</div>
</div>

</div>
    </>
  )
}

export default CountdownTimer