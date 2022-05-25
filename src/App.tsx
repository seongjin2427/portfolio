import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Introduction from './components/Introduction';
import Layout from './layout/Layout';
import Home from './pages/Home';
import theme from './styles/theme';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Layout>
        <Routes>
          <Route path="/intro" element={<Introduction />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
