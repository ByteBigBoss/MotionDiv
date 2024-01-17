'use client'
import React from 'react';
import '@/app/css/themeSwitch.css';
import { useEffect, useState } from 'react';

const ThemeToggleSwitch = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme === "dark") setIsDarkMode(true);
  },[]);

  useEffect(()=>{

    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    }else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }

  },[isDarkMode]);


  return (
    <label className="switch">
    <input
      type="checkbox"
      checked={isDarkMode}
      onClick={()=> setIsDarkMode(!isDarkMode)}
      className="switch-input"
    />
    <span className="switch-label " data-on="Dark" data-off="Light"></span>
    <span className="switch-handle"></span>
  </label>
  )
}

export default ThemeToggleSwitch