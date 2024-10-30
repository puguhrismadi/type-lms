import { BellDot, Search } from "lucide-react";
import { NavbarRoutes } from "./navbar-routes";
const Header = () => {
  return (
    <div className="p-4 bg-white flex justify-between">
      {/* Search Bar */}
      <div className="flex gap-2 border rounded-md p-1">
        <Search className="w-6 h-6" />{" "}
        <input
          type="text"
          name="search"
          placeholder="Search..."
          id="search"
          className="outline-none"
        />
      </div>
      {/* Get Started Button */}
      <div className="flex items-center gap-4">
        <BellDot className="w-6 h-6 text-gray-500 hover:text-primary" />
        <NavbarRoutes />
      </div>
    </div>
  );
};

export default Header;
