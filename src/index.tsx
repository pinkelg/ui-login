import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './ThemeProvider';
import { App } from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
