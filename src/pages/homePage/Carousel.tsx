import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import { Pagination } from 'swiper/modules';

const rectangle = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/Rectangle+25.png'
const rightArrow = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/Right+24px.png'

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: rectangle,
      title: "Inner Peace",
      subtitle: "01 — Bed Room",
    },
    {
      id: 2,
      image: rectangle,
      title: "Cozy Dining",
      subtitle: "02 — Dining Room",
    },
    {
      id: 3,
      image: rectangle,
      title: "Living Luxury",
      subtitle: "03 — Living Room",
    },
    {
      id: 4,
      image: rectangle,
      title: "Inner Peace",
      subtitle: "01 — Bed Room",
    },
    {
      id: 5,
      image: rectangle,
      title: "Cozy Dining",
      subtitle: "02 — Dining Room",
    },
    {
      id: 6,
      image: rectangle,
      title: "Living Luxury",
      subtitle: "03 — Living Room",
    }
  ];

  return (
    <div className="w-full max-w-lg">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((room) => (
          <SwiperSlide key={room.id}>
            <div className="flex justify-center items-center">
              <img
                src={room.image}
                alt={`Room ${room.id}`}
                className="w-full h-auto max-w-[300px]"
              />
            </div>
          </SwiperSlide>
        ))}
       <button
        className="swiper-button-next top-1/2 right-0"
        aria-label="Next Slide"
      >
        <img
          src={rightArrow}
          alt="Next Slide"
          className="w-48 h-24 object-contain"
        />
      </button>
      </Swiper>
    </div>
  );
};

export default Carousel;
