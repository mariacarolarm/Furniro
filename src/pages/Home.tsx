import hero from '../assets/images/home/hero.png'

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
    </>
  );
}

export default Home;