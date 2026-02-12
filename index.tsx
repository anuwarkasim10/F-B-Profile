import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log("FlavorPro Application Initializing...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Critical Error: Could not find root element with id 'root'");
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("FlavorPro Application Mounted Successfully.");
} catch (error) {
  console.error("Critical Error during mounting:", error);
}