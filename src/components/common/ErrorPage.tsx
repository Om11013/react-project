import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-semibold text-red-500">
          Something went wrong
        </h1>

        <p className="text-gray-600">An unexpected error occurred.</p>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 rounded-md bg-black text-white"
          >
            Refresh
          </button>

          <button
            onClick={() => navigate('/knowledge-base')}
            className="px-4 py-2 bg-black text-white rounded-md border"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
