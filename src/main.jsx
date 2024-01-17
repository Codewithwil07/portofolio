/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './components/page/HomePage.jsx';
import AboutPage from './components/page/AboutPage.jsx';
import ProjectPage from './components/page/ProjectPage.jsx';
import ContactPage from './components/page/ContactPage';
import Inkultur from './components/layout/project/Inkultur';
import ToggleMenu from './components/element/Navbar/ToggleMenu.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/project',
        element: <ProjectPage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    },
    {
        path: '/inkultur',
        element: <Inkultur />,
    },
    {
        path: '/toggle',
        element: <ToggleMenu />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
