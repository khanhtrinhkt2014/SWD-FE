import { ChevronDown } from "lucide-react";

const Header = () => {
  const menuItems = [
    { title: "About" },
    { title: "Solutions" },
    { title: "Who We Serve" },
    { title: "Resources" },
    { title: "Contact Us" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img
            src="https://oasiseducation.com/wp-content/uploads/2020/06/cropped-Oasis-logo-blue.png"
            alt="Oasis Logo"
            className="h-10"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <button className="flex items-center space-x-1 text-black hover:text-black transition">
                <span>{item.title}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Option 2
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
