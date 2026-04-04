import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold">404</h1>

        <p className="text-gray-600">Page not found</p>

        <Button
          onClick={() => navigate('/knowledge-base')}
          className="px-4 py-2 rounded-md bg-black text-white"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
