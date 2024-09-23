
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar, Autoplay, Pagination, Navigation } from 'swiper/modules'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

import banner1 from '../../../public/assests/bannerImage/building-1.jpg'
import banner2 from '../../../public/assests/bannerImage/building-2.jpg'
import banner3 from '../../../public/assests/bannerImage/building-3.jpg'
import banner4 from '../../../public/assests/bannerImage/flat-1.jpg'
import banner5 from '../../../public/assests/bannerImage/flat-2.jpg'
import banner6 from '../../../public/assests/bannerImage/flat-3.jpg'
import { useEffect } from 'react';

const Banner = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleSlideChange = () => {
    AOS.refresh();  // Reinitialize AOS when slide changes
  };

  return (
    <div className='container mx-auto'>

      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Scrollbar, Autoplay, Navigation, Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div className="relative h-full w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
            <img className="w-full h-[720px] object-cover transition-all duration-500 ease-in-out" src={banner1} alt="Banner One" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-75 rounded-lg transition-all duration-500 ease-in-out">
              <div
                className="ml-4 md:ml-20 lg:ml-80 mt-[180px] md:mt-[220px] lg:mt-[280px] text-white font-bold text-xl md:text-2xl lg:text-4xl inline-block bg-[#01208F] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 rounded-md transition-all duration-500 ease-in-out"
                data-aos="fade-up"
              >
                <h2 className="font-medium uppercase">
                  32 Left Corner Avenue
                </h2>
                <p className="text-white mt-2 font-light">Dhaka-1206</p>
              </div>

              <div
                className="flex text-2xl md:text-3xl lg:text-4xl items-center -mt-2 ml-4 md:ml-20 lg:ml-80 md:mt-10 lg:-mt-2 transition-all duration-500 ease-in-out"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2 className="text-white font-bold inline-block bg-[#5994FF] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 rounded-md transition-all duration-500 ease-in-out">
                  $800 <span className="text-lg md:text-xl lg:text-2xl font-light">/month</span>
                </h2>
                <div
                  className="bg-[#EBF4F6] py-6 md:py-6 lg:py-9 px-6 md:px-8 lg:px-10 rounded-md -ml-2 transition-all duration-500 ease-in-out"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <FaRegArrowAltCircleRight />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
            <img className="w-full h-[720px] object-cover transition-all duration-500 ease-in-out" src={banner2} alt="Banner One" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-75 rounded-lg transition-all duration-500 ease-in-out">
              <div
                className="ml-4 md:ml-20 lg:ml-80 mt-[180px] md:mt-[220px] lg:mt-[280px] text-white font-bold text-xl md:text-2xl lg:text-4xl inline-block bg-[#01208F] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 rounded-md transition-all duration-500 ease-in-out"
                data-aos="fade-up"
              >
                <h2 className="font-medium uppercase">
                  32 Left Corner Avenue
                </h2>
                <p className="text-white mt-2 font-light">Dhaka-1206</p>
              </div>

              <div
                className="flex text-2xl md:text-3xl lg:text-4xl items-center -mt-2 ml-4 md:ml-20 lg:ml-80 md:mt-10 lg:-mt-2 transition-all duration-500 ease-in-out"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2 className="text-white font-bold inline-block bg-[#5994FF] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 rounded-md transition-all duration-500 ease-in-out">
                  $800 <span className="text-lg md:text-xl lg:text-2xl font-light">/month</span>
                </h2>
                <div
                  className="bg-[#EBF4F6] py-6 md:py-6 lg:py-9 px-6 md:px-8 lg:px-10 rounded-md -ml-2 transition-all duration-500 ease-in-out"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <FaRegArrowAltCircleRight />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
            <img className="w-full h-[720px] object-cover transition-all duration-500 ease-in-out" src={banner3} alt="Banner One" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-75 rounded-lg transition-all duration-500 ease-in-out">
              <div
                className="ml-4 md:ml-20 lg:ml-80 mt-[180px] md:mt-[220px] lg:mt-[280px] text-white font-bold text-xl md:text-2xl lg:text-4xl inline-block bg-[#01208F] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 rounded-md transition-all duration-500 ease-in-out"
                data-aos="fade-up"
              >
                <h2 className="font-medium uppercase">
                  32 Left Corner Avenue
                </h2>
                <p className="text-white mt-2 font-light">Dhaka-1206</p>
              </div>

              <div
                className="flex text-2xl md:text-3xl lg:text-4xl items-center -mt-2 ml-4 md:ml-20 lg:ml-80 md:mt-10 lg:-mt-2 transition-all duration-500 ease-in-out"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2 className="text-white font-bold inline-block bg-[#5994FF] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 rounded-md transition-all duration-500 ease-in-out">
                  $800 <span className="text-lg md:text-xl lg:text-2xl font-light">/month</span>
                </h2>
                <div
                  className="bg-[#EBF4F6] py-6 md:py-6 lg:py-9 px-6 md:px-8 lg:px-10 rounded-md -ml-2 transition-all duration-500 ease-in-out"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <FaRegArrowAltCircleRight />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
            <img className="w-full h-[720px] object-cover transition-all duration-500 ease-in-out" src={banner4} alt="Banner One" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-75 rounded-lg transition-all duration-500 ease-in-out">
              <div
                className="ml-4 md:ml-20 lg:ml-80 mt-[180px] md:mt-[220px] lg:mt-[280px] text-white font-bold text-xl md:text-2xl lg:text-4xl inline-block bg-[#01208F] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 rounded-md transition-all duration-500 ease-in-out"
                data-aos="fade-up"
              >
                <h2 className="font-medium uppercase">
                  32 Left Corner Avenue
                </h2>
                <p className="text-white mt-2 font-light">Dhaka-1206</p>
              </div>

              <div
                className="flex text-2xl md:text-3xl lg:text-4xl items-center -mt-2 ml-4 md:ml-20 lg:ml-80 md:mt-10 lg:-mt-2 transition-all duration-500 ease-in-out"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2 className="text-white font-bold inline-block bg-[#5994FF] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 rounded-md transition-all duration-500 ease-in-out">
                  $800 <span className="text-lg md:text-xl lg:text-2xl font-light">/month</span>
                </h2>
                <div
                  className="bg-[#EBF4F6] py-6 md:py-6 lg:py-9 px-6 md:px-8 lg:px-10 rounded-md -ml-2 transition-all duration-500 ease-in-out"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <FaRegArrowAltCircleRight />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
            <img className="w-full h-[720px] object-cover transition-all duration-500 ease-in-out" src={banner5} alt="Banner One" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-75 rounded-lg transition-all duration-500 ease-in-out">
              <div
                className="ml-4 md:ml-20 lg:ml-80 mt-[180px] md:mt-[220px] lg:mt-[280px] text-white font-bold text-xl md:text-2xl lg:text-4xl inline-block bg-[#01208F] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 rounded-md transition-all duration-500 ease-in-out"
                data-aos="fade-up"
              >
                <h2 className="font-medium uppercase">
                  32 Left Corner Avenue
                </h2>
                <p className="text-white mt-2 font-light">Dhaka-1206</p>
              </div>

              <div
                className="flex text-2xl md:text-3xl lg:text-4xl items-center -mt-2 ml-4 md:ml-20 lg:ml-80 md:mt-10 lg:-mt-2 transition-all duration-500 ease-in-out"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2 className="text-white font-bold inline-block bg-[#5994FF] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 rounded-md transition-all duration-500 ease-in-out">
                  $800 <span className="text-lg md:text-xl lg:text-2xl font-light">/month</span>
                </h2>
                <div
                  className="bg-[#EBF4F6] py-6 md:py-6 lg:py-9 px-6 md:px-8 lg:px-10 rounded-md -ml-2 transition-all duration-500 ease-in-out"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <FaRegArrowAltCircleRight />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out">
            <img className="w-full h-[720px] object-cover transition-all duration-500 ease-in-out" src={banner6} alt="Banner One" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent opacity-75 rounded-lg transition-all duration-500 ease-in-out">
              <div
                className="ml-4 md:ml-20 lg:ml-80 mt-[180px] md:mt-[220px] lg:mt-[280px] text-white font-bold text-xl md:text-2xl lg:text-4xl inline-block bg-[#01208F] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 rounded-md transition-all duration-500 ease-in-out"
                data-aos="fade-up"
              >
                <h2 className="font-medium uppercase">
                  32 Left Corner Avenue
                </h2>
                <p className="text-white mt-2 font-light">Dhaka-1206</p>
              </div>

              <div
                className="flex text-2xl md:text-3xl lg:text-4xl items-center -mt-2 ml-4 md:ml-20 lg:ml-80 md:mt-10 lg:-mt-2 transition-all duration-500 ease-in-out"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2 className="text-white font-bold inline-block bg-[#5994FF] px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 rounded-md transition-all duration-500 ease-in-out">
                  $800 <span className="text-lg md:text-xl lg:text-2xl font-light">/month</span>
                </h2>
                <div
                  className="bg-[#EBF4F6] py-6 md:py-6 lg:py-9 px-6 md:px-8 lg:px-10 rounded-md -ml-2 transition-all duration-500 ease-in-out"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <FaRegArrowAltCircleRight />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default Banner;