import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.js';
import SidebarProvider from './context/sidebar.context.js';
import ThemeProvider from './context/theme.context.js';
import './index.css';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </ThemeProvider>
);
