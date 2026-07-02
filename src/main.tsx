import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Header from './assets/components/header.tsx';
import Footer from './footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />

    <main>
      <App />
    </main>

    <Footer />
  </StrictMode>,
);
