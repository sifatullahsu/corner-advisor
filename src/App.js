import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { route } from './router/router';

function App() {
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
