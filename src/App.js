import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          // path: '/contact',
          // element: <Contact></Contact>
        }
      ]
    }
  ])
  return (
    <div className=''>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
