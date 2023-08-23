import facebookLogo from '../assets/icon-facebook.svg'
import twitterLogo from '../assets/icon-twitter.svg'
import instagramLogo from '../assets/icon-instagram.svg'
import youtubeLogo from '../assets/icon-youtube.svg'
import iconUp from '../assets/icon-up.svg'
import iconDown from '../assets/icon-down.svg'

const networkLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  YouTube: youtubeLogo
}

export const OverviewCard = ({user, network, audienceType, audience, today, isUp}) => {

  const networkColors = {
    Facebook: 'bg-Facebook',
    Twitter: 'bg-Twitter',
    Instagram: 'bg-Instagram',
    YouTube: 'bg-YouTube'
  }

  return (
    <article className='rounded-[5px] text-center w-[326px] h-[216px] mx-auto bg-Light-Grayish-Blue dark:bg-Dark-Desaturated-Blue mb-4 overflow-hidden cursor-pointer hover:brightness-95 hover:dark:brightness-125 tablet:w-[255px]'>
      <div className={`w-full h-[4px] ${networkColors[network]} mb-8`}></div>
      <div className='flex items-center place-content-center gap-2 mb-[28px]'>
        <img src={networkLogos[network]} alt="network-logo" />
        <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
      </div>
      <p className='text-[56px] font-bold mb-5 text-Very-Dark-Blue dark:text-White'>{audience}</p>
      <p className='uppercase text-Dark-Grayish-Blue mb-6 tracking-[5px] text-xs'>{audienceType}</p>
      <div className='flex items-center place-content-center gap-1'>
        <img src={isUp ? iconUp : iconDown} alt="icon" />
        <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>{today} Today</p>
      </div>
    </article>
  )
}

export const OverviewTodayCard = ({network, statsType, stats, porcentage, isUp}) => {

  return (
    <article className='bg-Light-Grayish-Blue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] pr-[31px] pb-[19px] pl-6 cursor-pointer hover:brightness-95 dark:bg-Dark-Desaturated-Blue hover:dark:brightness-125 tablet:w-[255px]'>
      <div className='flex place-content-between mb-[21px]'>
        <p className='text-Dark-Grayish-Blue '>{statsType}</p>
        <img src={networkLogos[network]} alt="" />
      </div>
      <div className='flex place-content-between'>
        <p className='text-[42px] font-bold text-Very-Dark-Blue dark:text-White'>{stats}</p>
        <div className='flex items-center gap-1'>
          <img src={isUp ? iconUp : iconDown} alt="icon" />
          <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>{porcentage}%</p>
        </div>
      </div>
    </article>
  )
}

