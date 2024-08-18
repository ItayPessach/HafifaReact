import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles';
import {CacheProvider} from '@emotion/react';
import { theme, cacheRtl } from '@/config';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={theme}>
                  <App />
              </ThemeProvider>
          </CacheProvider>
      </BrowserRouter>
  </StrictMode>
);
