import { Swiper, SwiperSlide } from "swiper/react";
import rectangle from '../../assets/images/home/Rectangle.png'

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
  ];

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-80"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-96 object-cover ml-5"
            />
            <div className="">
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                →
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;