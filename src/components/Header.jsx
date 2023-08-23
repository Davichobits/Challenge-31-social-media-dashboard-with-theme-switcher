import { useState, useEffect } from "react"


export const Header = () => {
  
  let initialDarkMode =  JSON.parse(localStorage.getItem('dark'))
  
  if(!initialDarkMode){
    initialDarkMode = false
  }
  console.log(initialDarkMode)
  const [dark, setDark] = useState(initialDarkMode)
  
  const handleClick = () => {
    setDark(!dark)
  }

  useEffect(()=>{
    if(dark){
      document.documentElement.classList.add('dark')
      localStorage.setItem('dark', true)
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('dark', false)
    }
  },[dark])

  return (
    <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue-Top h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1000px] tablet:mb-[430px] desktop:mb-[200px]">
      <div className="tablet:flex tablet:justify-between max-w-[1140px] mx-auto">
        <div>
          <h1 className="text-Very-Dark-Blue text-2xl font-bold mb-1 dark:text-White md:text-[28px]">Social Media Dasboard</h1>
          <p className="text-Dark-Grayish-Blue font-bold mb-6">Total Followers: 23,004</p>
          <hr className="mb-[19px] tablet:hidden" />
        </div>
        <div className="flex justify-between gap-[13px]">
          <p className="text-Dark-Grayish-Blue font-bold dark:text-White">Dark Mode</p>

          <label className="relative w-12 h-6  rounded-full cursor-pointer p-[3px] overflow-hidden">
            <input onClick={handleClick} className="peer sr-only" type="checkbox" defaultChecked={dark} />
            <div className="bg-Toggle peer-checked:bg-Toggle-Gradient w-full h-full absolute top-0 left-0"></div>
            <div className="w-[18px] h-[18px] rounded-full bg-Light-Grayish-Blue dark:bg-Very-Dark-Blue-Top peer-checked:translate-x-[24px] transition-all absolute"></div>
          </label> 
        </div>
      </div>
    </header>
  )
}
