import React from "react";
import { RxDot } from "react-icons/rx";

function About() {
    return (
        <div className="h-screen w-full bg-gradient-to-r from-gray-900 via-purple-800 to-black text-white flex items-center p-8">
            <div className="flex w-full max-w-6xl">
                {/* Left Side - Image */}
                <div className="w-1/2 flex justify-center">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTskJHI1Owm1CL9KWHJFvNSmfpkcaTl4S5Q&s" 
                        alt="Profile"
                        className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Side - Text and Skills */}
                <div className="w-1/2 flex flex-col justify-center items-start space-y-8 pl-8">
                    {/* Biography */}
                    <div className="text-left space-y-4">
                        <h1 className="text-5xl font-extrabold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">MY BIOGRAPHY</h1>
                        <hr className="border-blue border-2 mb-8 w-72 relative top-" />
                        <br/>
                        <p className="text-lg max-w-md text-gray-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam eos doloribus, quia fugiat velit nostrum illo, repellendus veniam distinctio accusantium laborum non pariatur! Cumque natus, placeat error dolor porro temporibus.
                        </p>
                    </div>

                    {/* Skills and Interests */}
                    <div className="text-left space-y-4">
                        <h2 className="text-3xl font-bold">Skills and Interests</h2>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-blue-400 text-black px-4 py-2 rounded-full">Social Media</span>
                            <span className="bg-blue-400 text-black px-4 py-2 rounded-full">Design</span>
                            <span className="bg-blue-400 text-black px-4 py-2 rounded-full">Coding</span>
                            <span className="bg-blue-400 text-black px-4 py-2 rounded-full">Web Development</span>
                        </div>
                    </div>

                    {/* Separator and Dot Icon */}
                    <div className="flex items-center mt-12 w-full max-w-2xl relative right-7 ">
                        
                        <div className="mx-4">
                            <RxDot className="text-white-400 text-3xl" />
                        </div>
                        <hr className="border-white border-2 flex-1 " />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
