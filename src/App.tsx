import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';

import Introduction from './pages/Introduction';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Stack from './pages/Stack';
import Background from './components/Background';

function App() {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="main" element={<Main />}>
          <Route path="intro" element={<Introduction />} />
          <Route path="stack" element={<Stack />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="*" element={<Navigate to="/main/intro" />} />
      </Routes>
    </Background>
  );
}

export default App;
