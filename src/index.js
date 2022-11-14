import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOMClient from 'react-dom/client';


import App from './App';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);