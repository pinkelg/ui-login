import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './ThemeProvider';
import { client } from './config/react-query';
import { App } from './App';

const container = document.getElementById('ui-login-root') as HTMLElement;
const root = createRoot(container);

root.render(
  <QueryClientProvider client={client}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </QueryClientProvider>
);
