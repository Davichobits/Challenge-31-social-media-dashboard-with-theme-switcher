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
  return (
    <div className='rounded-[5px] text-center w-[326px] h-[216px] mx-auto bg-Light-Grayish-Blue mb-4 overflow-hidden'>
      <div className={`w-full h-[4px] bg-${network} mb-8`}></div>
      <div className='flex items-center place-content-center gap-2 mb-[28px]'>
        <img src={networkLogos[network]} alt="network-logo" />
        <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
      </div>
      <p className='text-[56px] font-bold mb-5 text-Very-Dark-Blue'>{audience}</p>
      <p className='uppercase text-Dark-Grayish-Blue mb-6 tracking-[5px] text-xs'>{audienceType}</p>
      <div className='flex items-center place-content-center gap-1'>
        <img src={isUp ? iconUp : iconDown} alt="icon" />
        <p className={`text-xs font-bold text-${isUp ? 'Lime-Green' : 'Bright-Red'}`}>{today} Today</p>
      </div>
    </div>
  )
}
