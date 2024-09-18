import React from "react";
import { RxDot } from "react-icons/rx";

const Education = () => {
    return (
        <div className="h-screen w-full bg-gradient-to-r from-gray-900 via-purple-800 to-black text-white flex items-center justify-center p-8 relative">
            <div className="flex space-x-80 items-start relative w-full max-w-6xl">
                {/* Left Side */}
                <div className="flex flex-col items-start space-y-8 max-w-lg relative">
                    {/* Title */}
                    <div className="text-left">
                        <h1 className="text-5xl font-extrabold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            Education
                        </h1>
                        <hr className="border-blue border-4 mb-8 w-72 relative top-6" />
                    </div>

                    {/* Description */}
                    <div className="text-left text-lg text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Rerum debitis ipsam voluptatem adipisci maxime ipsa,
                        porro enim minima. Culpa quam error nesciunt,
                        dignissimos numquam iure nobis nisi quo sit exercitationem?
                    </div>

                    
                   
                </div>

                {/* Right Side */}
                <div className="flex flex-col items-end space-y-6 max-w-lg relative top-14">
                    {/* Education Information */}
                    <div className="text-right space-y-4 mt-8">
                        <div>
                            <h2 className="text-3xl font-bold text-white">S.D Model School</h2>
                            <span className="text-lg text-gray-400">School of YamunaNagar | 2021</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">Bachelor Degree</h2>
                            <span className="text-lg text-gray-400">JMIT | B-tech CSE | 2025</span>
                        </div>
                    </div>

                    {/* Separator and Dot Icons */}
                    {/* <div className="flex items-center space-x-4 mt-12 relative">
                        <div className="absolute bottom-0 left-0 ml-4">
                            <RxDot className="text-blue-400 text-4xl" />
                        </div>
                        <hr className="border-black border-4 flex-1" />
                        
                    </div> */}
                     <div className="flex flex-col items-center w-full mt-12 relative top-32 right-96">
                        <div className="flex items-center space-x-4">
                            <div className="ml-4">
                                <RxDot className="text-white-400 text-2xl" />
                            </div>
                            <hr className="border-white border-2 flex-1 w-96 max-w-2xl" />
                            
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Education;
