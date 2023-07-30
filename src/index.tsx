import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './app/router';
import 'styles/app.css';
import {RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);