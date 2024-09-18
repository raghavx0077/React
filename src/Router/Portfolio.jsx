import React from "react";
import { RxDot } from "react-icons/rx";

const Portfolio = () => {
    return (
        <div className="h-screen w-full bg-gradient-to-r from-gray-900 via-purple-800 to-black text-white flex flex-col items-center justify-center p-8">
            {/* Title with Gradient Text and Italic Exclamation Marks */}
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Hello
                <h1 className="text-4xl italic ml-2">!!!</h1>
            </h1>

            {/* Name */}
            <h1 className="text-5xl font-extrabold mt-4 text-white">I'm Raghav</h1>
            <h2 className="text-5xl font-extrabold mt-2 text-white">Kapoor</h2>

            {/* Professional Title */}
            <p className="mt-6 text-lg font-semibold text-center max-w-lg text-gray-200">
                Professional content creator
            </p>

            {/* Description */}
            <p className="mt-4 text-center text-base max-w-2xl text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Magnam aliquid soluta, tempora quibusdam vero minima nobis 
                repellendus obcaecati quo, reprehenderit pariatur impedit 
                in consequatur nihil, perferendis consectetur eveniet aliquam 
                expedita?
            </p>

            {/* Separator and Icon */}
            <div className="mt-12 flex items-center space-x-2">
                <RxDot className="text-blue-400 text-3xl" />
                <hr className="border-blue-400 border-4 flex-1 w-96" />
            </div>
        </div>
    );
};

export default Portfolio;
