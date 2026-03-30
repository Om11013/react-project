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
} from 'lucide-react';

import { ROUTES } from '@/constants/routeConstants';

interface SidebarItem {
  name: string;
  icon: React.ElementType;
  path: string;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

const Sidebar = () => {
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
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-full overflow-y-auto">
      <div className="flex flex-col gap-6 py-6 font-sans">
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
                  <button
                    key={item.name}
                    id={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleNavItemClick(item.path, item.name)}
                    className={`
                      relative group flex items-center gap-3.5 px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 text-left
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
                  </button>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
