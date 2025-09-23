import React from "react";

const GlowCard = (props) => {
    const { data } = props;
    return (
        <div className="w-[190px] h-[300px] rounded-[20px] bg-gradient-to-tr from-[#EFFFFF] to-[#d6b4f9] transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.3)] mx-5">
            <div className="w-[190px] h-[300px] bg-[#fff] rounded-[20px] transition-all duration-200 hover:scale-95">
                <div className="p-7 flex flex-col items-center">
                    <div className="mb-5 flex items-center justify-center">
                        <div className="bg-[#544E5F] w-22 h-22 rounded-full absolute opacity-15"></div>
                        <img src={`/service-section/${data.img}`} alt="" className="w-15 h-15 z-10 relative" />
                    </div>
                    <h3 className="text-[#180A32] font-bold">{data.title}</h3>
                    <p className="text-[#7E7986] text-[15px] mt-0 mx-0 mb-[18px]">{data.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default GlowCard;
