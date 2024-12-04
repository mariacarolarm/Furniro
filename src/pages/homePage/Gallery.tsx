import img1 from '../../assets/images/home/Rectangle 36.png'
import img2 from '../../assets/images/home/Rectangle 37.png'
import img3 from '../../assets/images/home/Rectangle 38.png'
import img4 from '../../assets/images/home/Rectangle 39.png'
import img5 from '../../assets/images/home/Rectangle 40.png'
import img6 from '../../assets/images/home/Rectangle 41.png'
import img7 from '../../assets/images/home/Rectangle 43.png'
import img8 from '../../assets/images/home/Rectangle 44.png'
import img9 from '../../assets/images/home/Rectangle 45.png'

const Gallery = () => {
  return (
    <>
    <div className='flex gap-3'>
    <div className=''>
      <img src={img1} alt="image1" className='mb-3' />
      <img src={img2} alt="image2" className='mb-3' />
    </div>
    <div>
      <img src={img3} alt="image3" className='mb-3 mt-[7.6rem] left-1/2 -translate-x-[4.5rem]' />
      <img src={img4} alt="image4" className='mb-3' />
    </div>
    <div className='flex justify-center items-center'>
      <img src={img5} alt="image5" />
    </div>
    <div>
      <img src={img6} alt="image6" className='mb-3' />
      <img src={img7} alt="image7" className='mb-3' />
    </div>
    <div>
      <img src={img8} alt="image8" className='mb-3' />
      <img src={img9} alt="image9" className='mb-3' />
    </div>
    </div>
    </>
  );
};

export default Gallery;
