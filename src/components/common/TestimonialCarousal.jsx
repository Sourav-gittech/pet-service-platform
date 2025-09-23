import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaRegStar, FaStar } from "react-icons/fa";
import { VscQuote } from "react-icons/vsc";

const TestimonialCarousal = (props) => {

    const { reviews } = props;

    const getStar = (rating) => {
        let rating_arr = [];

        for (let i = 0; i < rating; i++) {
            rating_arr.push(<FaStar key={i} className="text-orange-400 inline mx-0.5" />);
        }
        for (let j = rating + 1; j <= 5; j++) {
            rating_arr.push(<FaRegStar key={j} className="text-orange-400 inline mx-0.5" />);
        }
        return rating_arr;
    }

    return (
        <div className="bg-transparent text-white pl-20">
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                modules={[Pagination, Autoplay]}
                className="w-150 h-100"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index} className="bg-transparent p-5 relative pl-20">
                        <div className="absolute right-20">
                            {getStar(review.rating)}
                        </div>
                        <VscQuote className="text-black text-3xl mt-10" />
                        <div className="text-left">
                            <h2 className="text-black mt-1 font-bold text-[20px]">{review.title}</h2>
                            <p className="text-black mt-2 mr-20 text-justify">{review.desc}</p>
                        </div>
                        <p className="text-gray-700 font-medium ml-80 mt-2">-{review.name}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialCarousal;
