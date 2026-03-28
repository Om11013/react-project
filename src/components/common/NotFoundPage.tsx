import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold">404</h1>

        <p className="text-gray-600">Page not found</p>

        <button
          onClick={() => navigate('/knowledge-base')}
          className="px-4 py-2 rounded-md bg-black text-white"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
