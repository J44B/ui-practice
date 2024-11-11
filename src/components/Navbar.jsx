import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-transparent py-4">
      <div className="container mx-auto flex items-center justify-between p-8">

        <nav className="hidden md:flex space-x-28 ml-10">
          <Link to="/" className="text-black font-bold text-2xl mr-24"><i className="fa-solid fa-square pr-2"></i>YOUR LOGO</Link>
          <Link to="/" className="text-black font-bold hover:text-gray-300 pl-10">HOME</Link>
          <Link to="/about" className="text-black font-bold hover:text-gray-300">ABOUT</Link>
          <Link to="/courses" className="text-black font-bold hover:text-gray-300">COURSES</Link>
          <Link to="/blog" className="text-black font-bold hover:text-gray-300">BLOG</Link>
          <Link to="/signin" className="bg-black px-6 py-2 text-white font-bold hover:text-gray-300 ">SIGN IN</Link>
          <button className="text-black">
        <i className="fa-solid fa-bars text-4xl"></i>
        </button>
        </nav>
        {/* Mobile Menu Icon */}

      </div>
    </header>
  );
};
export default Navbar;
