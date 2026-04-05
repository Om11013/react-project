import { Search, Bell, ChevronDown, Menu } from 'lucide-react';

import AventisiaLogo from '../../assets/aventisia_logo.jpeg';

import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="h-[60px] bg-secondary md:rounded-[15px] flex items-center justify-between px-4 md:px-6 text-white shrink-0">
      <div className="flex items-center gap-4 md:gap-6">
        <Button
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 text-white hover:bg-white/10 rounded-lg"
        >
          <Menu className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-2">
          <img
            src={AventisiaLogo}
            alt="Aventisia Logo"
            className="w-8 h-8 rounded-lg object-cover bg-white"
          />
          <span className="text-xl font-semibold tracking-wide">Worcspace</span>
        </div>

        <Button className="hidden sm:flex items-center gap-2 bg-[#1b2f66] hover:bg-[#38357A] transition-colors rounded-full px-3 py-1.5 text-sm">
          <span>Worcspace 1</span>
          <ChevronDown className="w-4 h-4 text-gray-300" />
        </Button>
      </div>

      <div className="flex-1 max-w-xl mx-4 md:mx-8 hidden md:block">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-gray-400 absolute left-3" />
          <Input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#2D2A68] border-transparent focus:border-primary rounded-md pl-10 pr-12 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none transition-colors"
          />
          <span className="absolute right-3 text-xs text-gray-400 bg-[#1E1B4B] px-1.5 py-0.5 rounded">
            ⌘K
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button className="relative p-2 hover:bg-[#2D2A68] rounded-full transition-colors text-gray-300 hover:text-white">
          <Bell className="w-5 h-5" />
        </Button>

        <div className="w-8 h-8 bg-[#EEF2FF] text-primary rounded-full flex items-center justify-center text-sm font-medium">
          GK
        </div>
      </div>
    </header>
  );
};

export default Header;
