import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";
import MyPhotography from "./components/MyPhotography";
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <About /> },
      { path: 'project', element: <ProjectSection /> },
      { path: 'contact', element: <ContactMe /> },
      { path: 'resume', element: <Resume /> },
      { path: 'myphotography', element: <MyPhotography /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
