import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { Home } from './Home';
import { CadastrarEpi } from './CadastrarEpi';
import { CadastrarFuncionario } from './CadastrarFuncionario';
import { HistoricoRetirada } from './historicoRetirada';

const paginas = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/CadastrarEpi', element: <CadastrarEpi /> },
  { path: '/CadastrarFuncionario', element: <CadastrarFuncionario /> },
  { path: '/historicoRetirada', element: <HistoricoRetirada /> },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={paginas} />
);
