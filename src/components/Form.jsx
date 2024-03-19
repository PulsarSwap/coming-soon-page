import { useState } from 'react';

export default function Form() {

  const [emailInput, setEmailInput] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
  };

  const validateEmail = (input) => {
    setIsValidEmail(emailRegex.test(emailInput));
  };

  const handleSubscribe = (e) => {
    if (!isValidEmail) {
      e.preventDefault();
    }
  };

  return (
    <>
      <form onSubmit={handleSubscribe} className='md:flex-row md:flex md:justify-center mb-20'>
        <div className='flex flex-col items-center  min-w-80 '>
          <input className={isValidEmail ? 'w-full mb-[24px] py-3 px-6 border-2 placeholder:text-PaleBlue  border-PaleBlue rounded-full outline-none bg-transparent mt-4 font-light flex shrink-0' : 'w-full mb-[4px] min-w-80 py-3 px-6 border-2 placeholder:text-PaleBlue border-LightRed rounded-full outline-none bg-transparent mt-4 font-light flex shrink-0 '}
            type="email"
            id="email"
            name="email"
            placeholder="Your email address..."
            onChange={handleEmailInput}
          />
          <p className={isValidEmail ? 'hidden' : 'text-LightRed flex justify-center text-sm italic mt-1 mb-4 md:m-0'}>Please provide a valid email address</p>
        </div>
        <button className='w-full active:scale-95 duration-100 md:w-52 md:h-[52px] py-3 mt-4 md:mx-6 bg-blue text-white rounded-full font-semibold flex shrink-0  items-center justify-center drop-shadow-xl '
          type="submit"
          id="submit"
          onClick={validateEmail}
        >
          Notify Me
        </button>
      </form>
    </>
  )
}
