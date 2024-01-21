import React from 'react';
import '@/app/css/SystemUpdates.css';
import { useRouter } from 'next/navigation';

const MaintenancePage = () => {

  const router = useRouter();

  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className='max-h-screen min-h-screen w-full overflow-hidden flex justify-center items-center font-family-Roboto flex-col'>
 
        <div className='flex flex-col items-center gap-[8px]'>
        <div className='text-[36px] font-extrabold text-center'>Something New is Coming Soon...</div>
          <div className='font-normal text-center'>Come back later</div>
        </div>
        <button className='py-[8px] px-[16px] bg-btx-primary border-[1px] border-color rounded-full hover:bg-black hover:text-white font-medium mt-[24px]' onClick={navigateToHome}>Back to Home</button>
    </div>
  )
}

export default MaintenancePage