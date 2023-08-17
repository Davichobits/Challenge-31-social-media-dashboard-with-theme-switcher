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

export const OverviewTodayCard = ({network, statsType, stats, porcentage, isUp}) => {
  return (
    <div className='bg-Light-Grayish-Blue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] pr-[31px] pb-[19px] pl-6'>
      <div className='flex place-content-between mb-[21px]'>
        <p className='text-Dark-Grayish-Blue '>{statsType}</p>
        <img src={networkLogos[network]} alt="" />
      </div>
      <div className='flex place-content-between'>
        <p className='text-[42px] font-bold text-Very-Dark-Blue'>{stats}</p>
        <div className='flex items-center gap-1'>
          <img src={isUp ? iconUp : iconDown} alt="icon" />
          <p className={`text-xs font-bold text-${isUp ? 'Lime-Green' : 'Bright-Red'}`}>{porcentage}%</p>
        </div>
      </div>
    </div>
  )
}
