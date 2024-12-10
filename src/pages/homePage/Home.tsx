import Card from './Card'
import Carousel from './Carousel'
import Gallery from './Gallery'

const hero = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/hero.png'
const dining = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/sec1.png'
const living = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/sec2.png'
const bedroom = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/sec3.png'
const grifo = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/Grifo.png'
const leviosa = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/Leviosa.png'
const lolito = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/Lolito.png'
const muggo = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/Muggo.png'
const pingky = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/Pingky.png'
const potty = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/Potty.png'
const respira = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/Respira.png'
const syltherine = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/Syltherine.png'
const image = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/Image.png'

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