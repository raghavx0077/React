import React from "react";
import { RxDot } from "react-icons/rx";
function Home() {
    return (
        <div className="flex flex-col h-screen bg-gradient-to-r from-gray-900 via-purple-800 to-black text-white">
            {/* Main Content Area */}
            <main className="flex-1 flex flex-col justify-center items-center px-6 sm:px-12 py-8">
                <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 text-center">
                    Welcome to My Portfolio
                </h1>
                <p className="text-base sm:text-lg font-medium max-w-lg text-gray-200 text-center">
                    Discover my projects, skills, and experiences. 
                    I’m excited to showcase my work and connect with you.
                </p>
                <div className="flex items-center mt-12 w-full max-w-2xl relative right-7 ">
                        
                        <div className="mx-4">
                            <RxDot className="text-white-400 text-3xl" />
                        </div>
                        <hr className="border-white border-2 flex-1 " />
                    </div>
            </main>
            
        </div>
    );
}

export default Home;
