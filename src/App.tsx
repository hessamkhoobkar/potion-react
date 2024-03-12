import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '@/layouts/RootLayout';
import { ThemeProvider } from '@/components/theme-provider';
import ChatMessages from '@/routes/ChatMessages';
import InitState from '@/routes/InitState';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout lang="en" />,
    children: [
      { path: '', element: <InitState /> },
      { path: 'conversation/:id', element: <ChatMessages /> },
    ],
  },
  {
    path: '/fa-rtl/',
    element: <RootLayout lang="fa" />,
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
