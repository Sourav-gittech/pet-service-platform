import React from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";

const PricingCard = (props) => {

    const { data } = props;

    return (
        <div className="relative w-[280px] rounded-2xl bg-gray-100 p-7 border-2 border-gray-300 transition duration-500 ease-out overflow-visible group hover:border-[#59129f] hover:shadow-[0_4px_18px_rgba(0,0,0,0.25)] mx-5">
            {/* Card Content */}
            <div className="h-full grid place-content-center gap-2 text-black">
                <h3 className="text-[#180A32] text-[22px] font-extrabold mb-2">{data.name}</h3>
                <div className='relative'>
                   <h2 className='absolute inline mt-2 ml-[-10px] text-[#180A32] text-[22px] font-bold'>$</h2>
                   <h2 className='inline text-[#180A32] text-[48px] font-bold'>{data.price}/</h2>
                   <div className='inline text-[#544E5F] text-[18px]'>visit</div>
                </div>
                {
                    data.description.map((des,index)=>(
                        <div key={index} className='text-left'><IoMdCheckmarkCircle className='inline text-[#FBAB2A] text-[18px]' /> <span className='inline text-[#7E7986] text-[18px] pb-[5px]'>{des}</span></div>
                    ))
                }
            </div>

            {/* Button */}
            <button className="absolute left-1/2 bottom-0 w-5/6 rounded-xl bg-[#d6b4f9] text-[#fff] text-base px-4 py-2 transform -translate-x-1/2 translate-y-[125%] opacity-0 transition duration-300 ease-out group-hover:translate-y-1/2 group-hover:opacity-100">
                Purchase Now
            </button>
        </div>
    );
}

export default PricingCard