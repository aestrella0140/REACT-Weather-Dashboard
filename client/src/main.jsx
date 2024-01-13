import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist';
import './index.css';

import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import weatherDashboard from './pages/weatherDashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />
      }, {
        path: '/Signup',
        element: <Signup />
      }, {
        path: '/weatherDashboard', 
        element: <weatherDashboard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
