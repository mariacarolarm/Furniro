import facebook from '../assets/images/footer/facebook.png';
import instagram from '../assets/images/footer/instagram.png';
import twitter from '../assets/images/footer/twitter.png';
import linkedIn from '../assets/images/footer/linkedIn.png';

const Footer = () => {
  return (
    <footer className="w-full">
      <div className='ml-24 flex h-80 justify-between mr-24'>
      <div className='w-64'>
        <h2 className='font-bold text-2xl mb-8'>Furniro.</h2>
        <p className='font-normal text-base text-[#9F9F9F] mb-7'>400 University Drive Suite 200 Coral Gables,
        FL 33134 USA</p>
        <div className='flex -ml-4'>
          <a href="https://www.facebook.com/" target='blank'>
          <img src={facebook} alt="Facebook Icon" />
          </a>
          <a href="https://www.instagram.com/" target='blank'>
          <img src={instagram} alt="Instagram Icon" />
          </a>
          <a href="https://x.com/i/flow/login" target='blank'>
          <img src={twitter} alt="Twitter Icon" />
          </a>
          <a href="https://www.linkedin.com/" target='blank'>
          <img src={linkedIn} alt="LinkedIn Icon" />
          </a>
        </div>
      </div>
      <div>
        <h3 className='text-base font-medium text-[#9F9F9F] mb-8'>Links</h3>
        <ul>
          <li className='text-base font-medium mb-7'>Home</li>
          <li className='text-base font-medium mb-7'>Shop</li>
          <li className='text-base font-medium mb-7'>About</li>
          <li className='text-base font-medium mb-7'>Contact</li>
        </ul>
      </div>
      <div>
        <h3 className='text-base font-medium text-[#9F9F9F] mb-8'>Help</h3>
        <ul>
          <li className='text-base font-medium mb-7'>Payment Options</li>
          <li className='text-base font-medium mb-7'>Returns</li>
          <li className='text-base font-medium mb-7'>Privacy Policies</li>
        </ul>
      </div>
      <div>
        <h3 className='text-base font-medium text-[#9F9F9F] mb-8'>Newsletter</h3>
        <input type="email" placeholder='Enter Your Email Address' className='w-48 border-b-2 border-black focus:outline-none mr-3' />
        <button className='border-b-2 border-black focus:outline-none'>SUBSCRIBE</button>
      </div>
      </div>
      <div className='border-t ml-24 mr-24'>
        <p className='text-base font-normal mt-9 mb-9'>2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
}

export default Footer;