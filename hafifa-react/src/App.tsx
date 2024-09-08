import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@components/layout/Layout.tsx';
import NotFound from '@pages/not-found/NotFound.tsx';
import { routes } from '@config';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="targets-bank" />} />
          {routes.map((route) => (<Route key={route.path} path={route.path} element={route.component()} />))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
