import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mahfuz2411/jsonplaceholder/main/quotes.json"
    )
      .then((res) => res.json())
      .then((dta) => setQuotes(dta));
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {quotes.map((res) => {
          return (
            <SwiperSlide key={res.id}>
              <div
                style={{
                  background: `url("${res.image}")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-full min-h-[50vh] md:min-h-[100vh] grid place-items-center p-5 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-600/75 z-0"
              >
                <div className="text-center flex flex-col justify-center items-center gap-4 relative z-10 text-white ">
                  <p className="text-xl md:text-3xl lg:text-5xl">
                    &quot;{res.quote}&quot;
                  </p>
                  <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
                    ~ {res.author}
                    <div className={`badge badge-accent badge-outline text-xs `}>
                      {res.category}
                    </div>
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Quotes;
