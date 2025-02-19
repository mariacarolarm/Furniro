import { useNavigate } from 'react-router-dom';
import Card from './Card'
import Carousel from './Carousel'
import Gallery from './Gallery'
import hero from '../../images/hero.png'
import dining from '../../images/sec1.png'
import living from '../../images/sec2.png'
import bedroom from '../../images/sec3.png'
import grifo from '../../images/Grifo.png'
import leviosa from '../../images/Leviosa.png'
import lolito from '../../images/Lolito.png'
import muggo from '../../images/Muggo.png'
import pingky from '../../images/Pingky.png'
import potty from '../../images/Potty.png'
import respira from '../../images/Respira.png'
import syltherine from '../../images/Syltherine.png'
import image from '../../images/Image.png'

const cards = [
  {
    id: 1,
    image: grifo,
  },
  {
    id: 2,
    image: leviosa,
  },
  {
    id: 3,
    image: lolito,
  },
  {
    id: 4,
    image: muggo,
  },
  {
    id: 5,
    image: pingky,
  },
  {
    id: 6,
    image: potty,
  },
  {
    id: 7,
    image: respira,
  },
  {
    id: 8,
    image: syltherine,
  },
];


const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className='relative'>
      <img src={hero} alt="picture of a chair, and a house plant, in a gray house" />
      <div className='absolute top-1/4 left-1/2 -translate-x-[1rem] bg-[#FFF3E3] h-3/5 p-10'>
        <p className='text-lg font-medium'>New Arrival</p>
        <h1 className='text-6xl font-bold text-[#B88E2F] mb-5'>Discover Our New Collection</h1>
        <p className='text-lg font-medium mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button onClick={ () => navigate('/shop')} className='w-56 h-16 bg-[#B88E2F] text-white'>BUY NOW</button>
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
    <div>
      <div className='m-10 text-center'>
        <h2 className='text-3xl font-bold'>Our Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
      </div>
      <div className='text-center mb-10'>
        <button className='w-60 h-16 bg-white text-[#B88E2F] font-semibold border-2 border-[#B88E2F]'>Show More</button>
      </div>
    </div>
    <div>
      <div className="bg-[#FAF3EA] flex flex-col lg:flex-row items-center gap-10 p-10">
        <div className="w-full lg:w-1/3">
          <h1 className="text-4xl font-bold mb-5">50+ Beautiful rooms inspiration</h1>
          <p className="font-medium text-base text-[#616161] mb-5">
            Our designer already made a lot of beautiful prototypes of rooms to inspire you.
          </p>
          <button className="w-44 h-12 bg-[#B88E2F] text-white">Explore More</button>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <img src={image} alt="Room inspiration" className="w-full max-w-[400px] h-auto" />
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <Carousel />
        </div>
      </div>
    </div>
    <div>
      <div className='mt-12'>
        <Gallery />
      </div>
    </div>
    </>
  );
}

export default Home;