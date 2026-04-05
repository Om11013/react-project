import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bot,
  Package,
  Library,
  CheckCircle2,
  Monitor,
  Layers,
  Zap,
  PlaySquare,
  Video,
  Shield,
  BookOpen,
  ScanLine,
  UserSquare2,
  Globe,
  X,
} from 'lucide-react';

import { ROUTES } from '@/constants/routeConstants';
import { Button } from '@/components/common/Button';
import type { SidebarSection } from '@/types/general';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Knowledge Base');

  const sections: SidebarSection[] = [
    {
      title: 'MY PROJECTS',
      items: [
        { name: 'Agents', icon: Bot, path: ROUTES.OTHER },
        { name: 'AI Models', icon: Package, path: ROUTES.OTHER },
        { name: 'Library', icon: Library, path: ROUTES.OTHER },
      ],
    },
    {
      title: 'ORCHESTRATOR',
      items: [
        { name: 'Published', icon: CheckCircle2, path: ROUTES.OTHER },
        { name: 'Machines', icon: Monitor, path: ROUTES.OTHER },
        { name: 'Queues', icon: Layers, path: ROUTES.OTHER },
        { name: 'Triggers', icon: Zap, path: ROUTES.OTHER },
        { name: 'Jobs', icon: PlaySquare, path: ROUTES.OTHER },
        { name: 'Executions', icon: Video, path: ROUTES.OTHER },
        { name: 'Vault', icon: Shield, path: ROUTES.OTHER },
        { name: 'Knowledge Base', icon: BookOpen, path: ROUTES.HOME },
        { name: 'Key Store', icon: ScanLine, path: ROUTES.OTHER },
      ],
    },
    {
      title: 'ADMIN',
      items: [
        { name: 'Tenant', icon: UserSquare2, path: ROUTES.OTHER },
        { name: 'Integrations', icon: Globe, path: ROUTES.OTHER },
      ],
    },
  ];

  const handleNavItemClick = (path: string, name: string) => {
    setActiveTab(name);
    navigate(path);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose} 
      />

      {/* Sidebar Drawer */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 flex flex-col h-full overflow-y-auto 
          transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-end p-4 md:hidden">
          <Button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500">
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex flex-col gap-6 py-6 md:pt-6 pt-2 font-sans">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-1.5">
            <h3 className="text-[10px] font-bold text-gray-400 px-7 tracking-[0.05em] uppercase mb-1">
              {section.title}
            </h3>
            <nav className="flex flex-col gap-0.5 px-3">
              {section.items.map((item) => {
                const isActive = activeTab === item.name;
                const Icon = item.icon;

                return (
                  <Button
                    key={item.name}
                    id={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleNavItemClick(item.path, item.name)}
                    className={`
                      relative group flex items-center gap-3.5 px-4 py-2 rounded-lg text-[13px] font-medium text-left justify-start
                      ${
                        isActive
                          ? 'bg-[#EEF2FF] text-[#4F46E5]'
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] bg-[#4F46E5] rounded-r-full" />
                    )}
                    <Icon
                      className={`w-[18px] h-[18px] stroke-[1.5] ${isActive ? 'text-[#4F46E5]' : 'text-gray-400 group-hover:text-gray-600'}`}
                    />
                    <span className="truncate">{item.name}</span>
                  </Button>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
      </aside>
    </>
  );
};

export default Sidebar;
