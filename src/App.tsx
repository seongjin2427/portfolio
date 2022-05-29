import { Route, Routes } from 'react-router-dom';
import './App.css';
import Introduction from './pages/Introduction';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Stack from './pages/Stack';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />}>
          <Route path="intro" element={<Introduction />} />
          <Route path="stack" element={<Stack />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
