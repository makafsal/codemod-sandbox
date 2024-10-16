// This example uses this CSS build to minimize CodeSandBox transpile times
import '@carbon/ibm-products/css/index-full-carbon.css';
import './index.scss';

import React from 'react';
import ReactDOM from "react-dom/client";
import './config';
import Example from './Example/Example';
import { ThemeProvider } from './ThemeSelector/ThemeContext';
import { ThemeDropdown } from './ThemeSelector/ThemeDropdown';
import { UIShellHeader } from './Example/Header';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <UIShellHeader />
      <Example />
      <ThemeDropdown />
    </ThemeProvider>
  </React.StrictMode>
);
