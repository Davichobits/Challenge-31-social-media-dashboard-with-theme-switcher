import { useState, useEffect } from "react"

export const Header = () => {

  const [dark, setDark] = useState(false)

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
    <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue-Top h-[235px] rounded-b-[20px] pt-8 px-6 mb-[900px] md:mb-[430px] xl:mb-[200px]">
      <h1 className="text-Very-Dark-Blue text-2xl font-bold mb-1 dark:text-White md:text-[28px]">Social Media Dasboard</h1>
      <p className="text-Dark-Grayish-Blue font-bold mb-6">Total Followers: 23,004</p>
      <hr className="mb-[19px]" />
      <div className="flex place-content-between ">
        <p className="text-Dark-Grayish-Blue font-bold">Dark Mode</p>
        <label className="relative w-12 h-6  rounded-full cursor-pointer p-[3px] overflow-hidden">
          <input onClick={handleClick} className="peer sr-only" type="checkbox" />
          <div className="bg-Toggle peer-checked:bg-Toggle-Gradient w-full h-full absolute top-0 left-0"></div>
          <div className="w-[18px] h-[18px] rounded-full bg-Light-Grayish-Blue dark:bg-Very-Dark-Blue-Top peer-checked:translate-x-[24px] transition-all absolute"></div>
        </label> 
      </div>
    </header>
  )
}
