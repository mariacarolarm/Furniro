import hero from '../../assets/images/home/hero.png'
import dining from '../../assets/images/home/sec1.png'
import living from '../../assets/images/home/sec2.png'
import bedroom from '../../assets/images/home/sec3.png'
import grifo from '../../assets/images/furniture/Grifo.png'
import leviosa from '../../assets/images/furniture/Leviosa.png'
import lolito from '../../assets/images/furniture/Lolito.png'
import muggo from '../../assets/images/furniture/Muggo.png'
import pingky from '../../assets/images/furniture/Pingky.png'
import potty from '../../assets/images/furniture/Potty.png'
import respira from '../../assets/images/furniture/Respira.png'
import syltherine from '../../assets/images/furniture/Syltherine.png'
import Card from './Card'
import image from '../../assets/images/home/Image.png'
import Carousel from './Carousel'
import Gallery from './Gallery'

const cards = [
  {
    image: grifo,
  },
  {
    image: leviosa,
  },
  {
    image: lolito,
  },
  {
    image: muggo,
  },
  {
    image: pingky,
  },
  {
    image: potty,
  },
  {
    image: respira,
  },
  {
    image: syltherine,
  },
]

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
    <div className='bg-[#FAF3EA] w-full h-3/5 flex justify-center items-center gap-10'>
      <div className='w-2/6 mt-56'>
        <h1 className='text-4xl font-bold mb-5'>50+ Beautiful rooms inspiration</h1>
        <p className='font-medium text-base text-[#616161] mb-5'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <button className='w-44 h-12 bg-[#B88E2F] text-white'>Explore More</button>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <Carousel />
      </div>
    </div>
    <div>
      <div className='text-center mt-10'>
        <p className='text-xl font-semibold text-[#616161]'>Share your setup with</p>
        <h2 className='text-4xl font-bold text-[#3A3A3A]'>#FurniroFurniture</h2>
      </div>
      <div>
        <Gallery />
      </div>
    </div>
    </>
  );
}

export default Home;