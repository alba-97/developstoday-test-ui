import React from "react";
import { Home } from "lucide-react";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="/"
              className="text-lg text-primary hover:text-primary/80 flex gap-x-4 items-center"
            >
              <Home className="h-6 w-6" />
              <span>Home</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
