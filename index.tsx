import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const mountApp = () => {
  const container = document.getElementById('root');
  if (!container) {
    console.error("Failed to find the root element");
    return;
  }

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("App mounted successfully");
  } catch (error) {
    console.error("Rendering error:", error);
    container.innerHTML = `<div style="padding: 20px; text-align: center;"><h1>Something went wrong</h1><p>${error instanceof Error ? error.message : 'Unknown error'}</p></div>`;
  }
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  mountApp();
} else {
  window.addEventListener('DOMContentLoaded', mountApp);
}
