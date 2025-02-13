import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { siteSettings } from "~/settings/site-settings";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Navigation, Thumbs } from "swiper/modules";

function MainSlider({className}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [direction, setDirection] = useState('horizontal');
  const [thumAutoHeight, setThumAutoHeight] = useState('horizontal');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDirection('vertical');
        setThumAutoHeight(false);
      } else {
        setDirection('horizontal');
        setThumAutoHeight(true);
      }
    };

    // İlk yüklemede kontrol et
    handleResize();

    // Ekran boyutu değiştiğinde kontrol et
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className={`grid grid-cols-12 gap-y-3 gap-x-7 ${className}`}>
      <div className="col-span-12 lg:col-span-8 xl:col-span-9">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={false}
          spaceBetween={10}
          autoHeight={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
          className="main-slider"
        >
          {siteSettings.site_blogs.articles.map((blog, index) => {
            return (
              <SwiperSlide key={`main-slider#${index}`}>
                <div className="blog-item relative">
                  <Link to={""} className="blog-image block relative">
                    <LazyLoadImage
                      src={blog.images[0].path}
                      alt={blog.images[0].alt}
                      width={1072}
                      height={648}
                      className="rounded-[1rem] w-full aspect-[16/9] lg:aspect-[656/412] xl:aspect-[1091/648] object-cover"
                    />
                    <div className="shadow absolute inset-0 bg-gradient-to-r from-[#0B0B0B] to-[#0B0B0B00] opacity-60"></div>
                  </Link>
                  <div className="blog-captions absolute bottom-0 left-0 pl-6 md:pl-[3rem] pb-6 md:pb-[3.5rem] pr-6 md:pr-0 md:max-w-[36.75rem]">
                    <div className="blog-item-tags block text-xs text-white text-opacity-50 font-semibold mb-2 sm:mb-4">
                      <Link
                        to={""}
                        className="hover:text-white hover:text-opacity-100 transition-colors"
                      >
                        #YAŞAM
                      </Link>
                      <span>,&nbsp;</span>
                      <Link
                        to={""}
                        className="hover:text-white hover:text-opacity-100 transition-colors"
                      >
                        #BİLİM
                      </Link>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold md:mb-4">
                      <Link to={""}>{blog.title}</Link>
                    </h3>
                    <Link
                      to={""}
                      className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-secondary text-xs font-semibold rounded-[0.25rem] transition-all py-2 px-3"
                    >
                      <span>Devamını Oku</span>
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.37057 9.43307L6.30362 5.5L2.37057 1.56694C2.25453 1.44948 2.18969 1.29089 2.19019 1.12579C2.19069 0.960686 2.2565 0.802489 2.37324 0.685744C2.48999 0.568998 2.64819 0.50319 2.81329 0.502688C2.97839 0.502187 3.13698 0.567034 3.25444 0.683069L7.62944 5.05807C7.74664 5.17528 7.81249 5.33425 7.81249 5.5C7.81249 5.66576 7.74664 5.82473 7.62944 5.94194L3.25444 10.3169C3.13698 10.433 2.97839 10.4978 2.81329 10.4973C2.64819 10.4968 2.48999 10.431 2.37324 10.3143C2.2565 10.1975 2.19069 10.0393 2.19019 9.87422C2.18969 9.70912 2.25453 9.55052 2.37057 9.43307Z"
                          fill="black"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="col-span-12 lg:col-span-4 xl:col-span-3 relative">
        <Swiper
          direction={direction}
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={0}
          slidesPerView={6}
          watchSlidesProgress={true}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 0,
              autoHeight: true,
            },
            576: {
              slidesPerView: 5,
              spaceBetween: 0,
              autoHeight: true,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 0,
              autoHeight: true,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
          }}
          modules={[Thumbs]}
          className="main-slider-thumbs top-0 left-0 lg:h-full lg:!absolute"
        >
          {siteSettings.site_blogs.articles.map((blog, index) => {
            return (
              <SwiperSlide className="blog-slide group" key={`main-slider-thumbs#${index}`}>
                <Link
                  to={""}
                  className="blog-item group-[.swiper-slide-thumb-active]:bg-white group-[.swiper-slide-thumb-active]:bg-opacity-10 flex items-center gap-4 relative rounded-2xl p-2 lg:py-3 lg:px-4"
                >
                  <div className="blog-image relative flex-shrink-0 w-full aspect-[4/3] lg:aspect-[82/79] lg:w-[72px] 2xl:w-[82px]">
                    <LazyLoadImage
                      src={blog.images[0].thumbPath} // use normal <img> attributes as props
                      alt={blog.images[0].alt}
                      width={82}
                      height={79}
                      className="w-full h-full  rounded-[0.5rem] object-cover"
                    />
                  </div>
                  <h5 className="hidden text-base font-semibold lg:!line-clamp-3">
                    <Link to={""}>{blog.title}</Link>
                  </h5>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default MainSlider;
