import Navbar from './Navbar';

const Header = () => {
  return (
<div className=" bg-[#F0F0F0] text-black">
  <Navbar />
  {/* Main Content */}
  <div className='flex'>
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
  <div className="heroImage z10">
        <div className="">
          <img
            src="./src/assets/images/header-UI.svg"
            alt="Person"
            className="w-full h-auto object-cover z-10"
          />
        </div>
  </div>
</div>
<div className="blackBar -mt-44 flex flex-row justify-between items-center bg-black text-white text-2xl w-full h-44 z-50">
    <p className="z-50 bg-black text-white px-6 py-2 font-semibold border-white">Join the Community
      <i className="fa-solid fa-square px-2 text-white text-xl"></i></p>
    <p className="z-50 bg-black text-white px-6 py-2 border-white border mr-10"> 
      EDITION <p className='text-center text-2xl font-semibold'>2022</p></p>
  
  </div>
</div>
  );
};
export default Header;
