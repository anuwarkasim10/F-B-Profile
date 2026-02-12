import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/**
 * Initialize the application once the DOM is ready.
 */
const init = () => {
  const container = document.getElementById('root');

  if (!container) {
    console.error("FlavorPro: Critical Error - Root element not found.");
    return;
  }

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.info("FlavorPro: Application mounted successfully.");
  } catch (err) {
    console.error("FlavorPro: Failed to mount application:", err);
    container.innerHTML = `<div style="padding: 20px; color: red;">Error loading application. Check console for details.</div>`;
  }
};

// Handle mounting based on document ready state
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
