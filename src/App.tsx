import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '@/layouts/RootLayout';
import { ThemeProvider } from '@/components/theme-provider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout lang="en" />,
    children: [{ path: 'contacts/:id', element: <RootLayout lang="en" /> }],
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
