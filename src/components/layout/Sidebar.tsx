const Sidebar = () => {
  return (
    <aside className="w-64 bg-secondary text-white flex flex-col p-4">
      <h1 className="text-xl font-semibold mb-6">Workspace</h1>

      <nav className="flex flex-col gap-2">
        <button className="text-left px-3 py-2 rounded-md hover:bg-white/10">
          Dashboard
        </button>
        <button className="text-left px-3 py-2 rounded-md bg-white/10">
          Knowledge Base
        </button>
        <button className="text-left px-3 py-2 rounded-md hover:bg-white/10">
          Settings
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
