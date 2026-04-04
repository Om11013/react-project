import { Search, Bell, ChevronDown } from 'lucide-react';

import AventisiaLogo from '../../assets/aventisia_logo.jpeg';

const Header = () => {
  return (
    <header className="h-[60px] bg-secondary flex items-center justify-between px-6 text-white shrink-0">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <img
            src={AventisiaLogo}
            alt="Aventisia Logo"
            className="w-8 h-8 rounded-lg object-cover bg-white"
          />
          <span className="text-xl font-semibold tracking-wide">Worospace</span>
        </div>

        <button className="flex items-center gap-2 bg-[#2D2A68] hover:bg-[#38357A] transition-colors rounded-md px-3 py-1.5 text-sm">
          <span>Worspace 1</span>
          <ChevronDown className="w-4 h-4 text-gray-300" />
        </button>
      </div>

      <div className="flex-1 max-w-xl mx-8">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-gray-400 absolute left-3" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#2D2A68] border border-transparent focus:border-primary rounded-md pl-10 pr-12 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none transition-colors"
          />
          <span className="absolute right-3 text-xs text-gray-400 bg-[#1E1B4B] px-1.5 py-0.5 rounded border border-gray-600">
            ⌘K
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-[#2D2A68] rounded-full transition-colors text-gray-300 hover:text-white">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-secondary"></span>
        </button>

        <div className="w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center text-sm font-medium">
          GK
        </div>
      </div>
    </header>
  );
};

export default Header;
