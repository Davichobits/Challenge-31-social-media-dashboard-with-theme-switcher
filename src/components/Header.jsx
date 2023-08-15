export const Header = () => {
  return (
    <header className="bg-Very-Pale-Blue h-[235px] rounded-b-[20px] pt-8 px-6">
      <h1 className="text-Very-Dark-Blue text-2xl font-bold mb-1">Social Media Dasboard</h1>
      <p className="text-Dark-Grayish-Blue font-bold mb-6">Total Followers: 23,004</p>
      <hr className="mb-[19px]" />
      <div className="flex place-content-between ">
        <p className="text-Dark-Grayish-Blue font-bold">Dark Mode</p>
        <label className="relative w-12 h-6  rounded-full cursor-pointer p-[3px] overflow-hidden">
          <input className="peer sr-only" type="checkbox" />
          <div className="bg-Toggle peer-checked:bg-Toggle-Linear-Gradient w-full h-full absolute top-0 left-0"></div>
          <div className="w-[18px] h-[18px] rounded-full bg-Light-Grayish-Blue peer-checked:translate-x-[24px] transition-all absolute"></div>
        </label> 
      </div>
    </header>
  )
}
