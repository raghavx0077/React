import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-gray-900 via-purple-800 to-black text-white flex">
      {/* Left Side: Title and Text */}
      <div className="w-1/2 p-8 flex flex-col justify-center ">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4">
          My Projects
        </h1>
        <p className="text-lg text-gray-300">
          I have worked on several exciting projects. Check them out below!
        </p>
      </div>

      {/* Right Side: Projects List */}
      <div className="w-1/2 p-8 flex flex-col justify-center ml-96">
        <ul className="list-disc list-inside space-y-6">
          <li className="relative pl-6">
            <Link
              to="/FetchApiData"
              className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300"
            >
              FetchApiData
            </Link>
            <hr className="  left-6 w-32 border-t-2 border-white " />
          </li>
          <li className="relative pl-6">
            <Link
              to="/Figma"
              className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300"
            >
              Figma
            </Link>
            <hr className="absolute bottom- left-6 w-28 border-t-2 border-white" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
