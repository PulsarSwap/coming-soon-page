import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <>
      {/* <div className='w-full flex justify-between items-center mt-28 md:mt-14 px-20 md:w-1/4'>
        <FontAwesomeIcon icon={faFacebookF} className='border rounded-full flex items-center justify-center py-[8px] px-[10px] text-sm hover:bg-blue text-blue hover:text-white hover:border-blue hover:cursor-pointer' />
        <FontAwesomeIcon icon={faXTwitter} className='border rounded-full flex items-center justify-center p-2 text-sm hover:bg-blue text-blue hover:text-white hover:border-blue hover:cursor-pointer' />
        <FontAwesomeIcon icon={faInstagram} className='border rounded-full flex items-center justify-center p-2 text-sm hover:bg-blue text-blue hover:text-white hover:border-blue hover:cursor-pointer' />
      </div> */}
      <h3 className='text-Gray font-light my-6'>© Copyright PulsarSwap All rights reserved.</h3>
    </>
  )
}
