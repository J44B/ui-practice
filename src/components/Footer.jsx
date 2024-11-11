const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">History</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Mission Statement</a></li>
            <li><a href="#" className="hover:underline">Terms & Condition</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* What We Do Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">What we do</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">News and stories</a></li>
            <li><a href="#" className="hover:underline">Publications</a></li>
            <li><a href="#" className="hover:underline">Take action</a></li>
            <li><a href="#" className="hover:underline">Recommendations</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
          </ul>
        </div>

        {/* Newsletter & Social Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-end">Sign Up To Receive</h3>
          <h3 className="text-lg font-bold text-end">Our Newsletter</h3>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black border border-white py-2 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          
          </form>
          <div>
            <div className="flex justify-between space-x-2 mr-4">
            <h3 className="text-lg font-bold mb-2">Follow us!</h3>
              <a href="#" className="hover:text-purple-600"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-purple-600"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-purple-600"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
