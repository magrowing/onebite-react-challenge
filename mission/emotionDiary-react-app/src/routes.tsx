import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/new',
    element: <New />,
  },
  {
    path: '/diary/:id',
    element: <Diary />,
  },
  {
    path: '/edit/:id',
    element: <Edit />,
  },
];

export default routes;
