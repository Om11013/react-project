const Header = () => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold">Knowledge Base</h2>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
