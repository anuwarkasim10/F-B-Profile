import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.info("FlavorPro: Initializing application...");

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.info("FlavorPro: App mounted.");
} else {
  console.error("FlavorPro: Could not find root element.");
}
