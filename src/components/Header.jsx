import Navbar from './Navbar';
import image1 from "../assets/images/Image1.png";
import UI1 from "../assets/images/UI1.jpg";
const Header = () => {
  return (
<div className=" h-screen bg-white text-black">
  <Navbar />
  {/* Main Content */}
  <div>
  <div className=" flex flex-col items-start px-8 text-start h-full justify-start space-y-10">
    {/* Large Title */}
    <div className="flex items-baseline ml-8">
      <h1 className="text-8xl md:text-9xl font-extrabold tracking-tight">UI.</h1>
      <h2 className="text-4xl md:text-5xl font-light ml-4">BEGINNER</h2>
      <h2 className="text-4xl md:text-5xl font-bold ml-1">&apos;s</h2>
    </div>
    <p className="max-w-lg md:max-w-xl text-xl md:text-2xl font-semibold leading-relaxed ml-8">
      START GUIDE FOR BEGINNER DESIGNERS.
    </p>
    <p className="max-w-lg md:max-w-xl text-lg md:text-xl font-medium leading-7 ml-8">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur
      accusamus alias. Ratione impedit autem aliquid consectetur sed. Impedit
      numquam consequuntur quo dolore accusantium modi at neque soluta sunt possimus?
    </p>
    <div className="flex space-x-4 ml-8">
      <button className="bg-purple-600 px-8 py-3 text-white font-bold rounded-md">
        LET&apos;S START
      </button>
      <button className="text-black font-bold border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-100">
        READ MORE
      </button>
    </div>
    <div className='text-3xl ml-8'>
    <i className="fa-solid fa-arrow-left"></i>
    </div>
  </div>
  {/* Right Side Images */}
  <div className="absolute inset-0 flex justify-end items-center">
        <div className="relative w-[80%] max-w-[600px] h-auto top-20 right-40">
          <img
            src={image1}
            alt="Person"
            className="w-full h-auto object-cover "
          />
        </div>
        <div className="absolute w-[70%] max-w-[700px] h-auto opacity-70">
          <img
            src={UI1}
            alt="U"
            className="w-full h-auto object-contain"
          />
        </div>
  </div>

  <div className="flex flex-row justify-between items-center bg-black text-white text-2xl mt-20 w-full h-40">
    <p className=" bg-black text-white px-6 py-2 font-semibold border-white">Join the Community
      <i className="fa-solid fa-square px-2 text-white text-xl"></i></p>
    <p className=" bg-black text-white px-6 py-2 border-white border mr-10"> 
      EDITION <p className='text-center text-2xl font-semibold'>2022</p></p>
  
  </div>
</div>
</div>
  );
};
export default Header;
