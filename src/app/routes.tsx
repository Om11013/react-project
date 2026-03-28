import { createBrowserRouter, Navigate } from 'react-router-dom';

import MainLayout from '@/components/layout/MainLayout';
import KnowledgeBase from '@/features/knowledge-base/pages';
import OtherPage from '@/features/other/pages';
import ErrorPage from '@/components/common/ErrorPage';
import NotFoundPage from '@/components/common/NotFoundPage';
import { ROUTES } from '@/constants/routeConstants';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.HOME} replace />,
      },
      {
        path: ROUTES.HOME,
        element: <KnowledgeBase />,
      },
      {
        path: ROUTES.OTHER,
        element: <OtherPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
