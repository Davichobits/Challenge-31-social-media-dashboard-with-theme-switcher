import facebookLogo from '../assets/icon-facebook.svg'
import twitterLogo from '../assets/icon-twitter.svg'
import instagramLogo from '../assets/icon-instagram.svg'
import youtubeLogo from '../assets/icon-youtube.svg'
import iconUp from '../assets/icon-up.svg'

const networkLogos = {
  facebook: facebookLogo,
  twitter: twitterLogo,
  instagram: instagramLogo,
  youtube: youtubeLogo
}

export const OverviewCard = ({user, network, followers}) => {
  return (
    <div className="border-t-4 border-Facebook rounded-[5px] text-center w-[326px] h-[216px] mx-auto bg-Light-Grayish-Blue pt-8 mb-4">
      <div className='flex items-center place-content-center gap-2 mb-[28px]'>
        <img src={networkLogos[network]} alt="network-logo" />
        <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
      </div>
      <p className='text-[56px] font-bold mb-5'>{followers}</p>
      <p className='uppercase text-Dark-Grayish-Blue mb-6'>followers</p>
      <div className='flex items-center place-content-center gap-1'>
        <img src={iconUp} alt="icon" />
        <p className='text-xs font-bold'>12 Today</p>
      </div>
    </div>
  )
}
