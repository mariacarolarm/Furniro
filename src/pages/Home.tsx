import hero from '../assets/images/home/hero.png'
import dining from '../assets/images/home/sec1.png'
import living from '../assets/images/home/sec2.png'
import bedroom from '../assets/images/home/sec3.png'

const Home = () => {
  return (
    <>
    <div className='relative'>
      <img src={hero} alt="picture of a chair, and a house plant, in a gray house" />
      <div className='absolute top-1/4 left-1/2 -translate-x-[1rem] bg-[#FFF3E3] h-3/5 p-10'>
        <p className='text-lg font-medium'>New Arrival</p>
        <h1 className='text-6xl font-bold text-[#B88E2F] mb-5'>Discover Our New Collection</h1>
        <p className='text-lg font-medium mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className='w-56 h-16 bg-[#B88E2F] text-white'>BUY NOW</button>
      </div>
    </div>
    <div>
      <div className='m-10 text-center'>
        <h2 className='text-3xl font-bold'>Browse The Range</h2>
        <p className='text-xl font-normal text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='flex gap-5 justify-center mb-10'>
        <div className='text-center'>
        <img src={dining} alt="" />
        <p className='text-xl font-semibold p-4'>Dining</p>
        </div>
        <div className='text-center'>
        <img src={living} alt="" />
        <p className='text-xl font-semibold p-4'>Living</p>
        </div>
        <div className='text-center'>
        <img src={bedroom} alt="" />
        <p className='text-xl font-semibold p-4'>Bedroom</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;