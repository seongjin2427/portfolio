import { Route, Routes } from 'react-router-dom';

import './App.css';

import Introduction from './pages/Introduction';
import Home from './pages/Home';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Stack from './pages/Stack';
import Contact from './pages/Contact';
import Background from './components/Background';

function App() {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="main" element={<Main />}>
          <Route path="intro" element={<Introduction />} />
          <Route path="stack" element={<Stack />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Background>
  );
}

export default App;
