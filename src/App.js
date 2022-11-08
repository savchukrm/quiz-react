import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import QuizReact from './pages/QuizReact';
import QiuzHTML from './pages/QuizHTML';
import QiuzCss from './pages/QuizCss';
import QiuzJS from './pages/QuizJS';
import Footer from './pages/Footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index={true} element={<Home />} />
            <Route path="react" element={<QuizReact />} />
            <Route path="html" element={<QiuzHTML />} />
            <Route path="js" element={<QiuzJS />} />
            <Route path="css" element={<QiuzCss />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
